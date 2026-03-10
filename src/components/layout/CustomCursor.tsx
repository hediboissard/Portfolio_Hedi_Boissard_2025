import { useEffect, useRef, useState } from 'react'

type Position = {
  x: number
  y: number
}

export default function CustomCursor() {
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)
  const cursorRef = useRef<HTMLDivElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetPos = useRef<Position>({ x: -100, y: -100 })
  const currentPos = useRef<Position>({ x: -100, y: -100 })

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
      targetPos.current = { x: e.clientX, y: e.clientY }

      // Démarre une boucle d'animation si elle n'existe pas
      if (frameRef.current == null) {
        const animate = () => {
          frameRef.current = requestAnimationFrame(animate)
          const { x: cx, y: cy } = currentPos.current
          const { x: tx, y: ty } = targetPos.current

          // Interpolation légère pour un suivi fluide
          const nextX = cx + (tx - cx) * 0.45
          const nextY = cy + (ty - cy) * 0.45

          currentPos.current = { x: nextX, y: nextY }

          if (cursorRef.current) {
            const size = 20
            cursorRef.current.style.transform = `translate3d(${nextX - size / 2}px, ${
              nextY - size / 2
            }px, 0)`
          }
        }
        frameRef.current = requestAnimationFrame(animate)
      }
    }

    const handleLeave = () => {
      setVisible(false)
      targetPos.current = { x: -100, y: -100 }
      currentPos.current = { x: -100, y: -100 }

      if (cursorRef.current) {
        const size = 20
        cursorRef.current.style.transform = `translate3d(${-100 - size / 2}px, ${
          -100 - size / 2
        }px, 0)`
      }
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
  }, [enabled])

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
        transform: `translate3d(${-100 - size / 2}px, ${-100 - size / 2}px, 0)`
      }}
    />
  )
}
