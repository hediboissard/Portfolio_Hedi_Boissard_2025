import { useEffect, useRef, useState } from 'react'

type Position = {
  x: number
  y: number
}

export default function CustomCursor() {
  const [pos, setPos] = useState<Position>({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetPos = useRef<Position>({ x: -100, y: -100 })

  useEffect(() => {
    if (typeof window === 'undefined') return

    const media = window.matchMedia('(pointer: fine)')
    const update = () => setEnabled(media.matches)

    update()
    media.addEventListener('change', update)

    return () => {
      media.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return

    const handleMove = (e: MouseEvent) => {
      setVisible(true)
      // Stocke la position cible sans re-render à chaque event
      targetPos.current = { x: e.clientX, y: e.clientY }
      // Démarre une boucle d'animation si elle n'existe pas
      if (frameRef.current == null) {
        const animate = () => {
          frameRef.current = requestAnimationFrame(animate)
          // Lissage léger pour éviter les à-coups mais garder une souris réactive
          const current = pos
          const nextX = current.x + (targetPos.current.x - current.x) * 0.4
          const nextY = current.y + (targetPos.current.y - current.y) * 0.4
          const roundedX = Math.round(nextX)
          const roundedY = Math.round(nextY)

          // Met à jour le state uniquement si la position a changé de façon visible
          if (roundedX !== current.x || roundedY !== current.y) {
            setPos({ x: roundedX, y: roundedY })
          }
        }
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    const handleLeave = () => {
      setVisible(false)
      targetPos.current = { x: -100, y: -100 }
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (frameRef.current != null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [enabled, pos])

  if (!enabled) return null

  const size = 20

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed z-[60] rounded-full bg-neutral-400/50 backdrop-blur-sm transition-opacity duration-100 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        width: size,
        height: size,
        transform: `translate3d(${pos.x - size / 2}px, ${pos.y - size / 2}px, 0)`
      }}
    />
  )
}
