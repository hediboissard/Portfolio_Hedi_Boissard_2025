import { useEffect, useState } from 'react'

type Position = {
  x: number
  y: number
}

export default function CustomCursor() {
  const [pos, setPos] = useState<Position>({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [enabled, setEnabled] = useState(false)

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
      setPos({ x: e.clientX, y: e.clientY })
    }

    const handleLeave = () => {
      setVisible(false)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [enabled])

  if (!enabled) return null

  const size = 20

  return (
    <div
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

