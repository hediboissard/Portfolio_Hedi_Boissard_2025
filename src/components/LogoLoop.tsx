import React, { useEffect, useRef } from 'react'

export type LogoItem =
  | {
      node: React.ReactNode
      href?: string
      title?: string
      ariaLabel?: string
    }
  | {
      src: string
      alt?: string
      href?: string
      title?: string
      width?: number
      height?: number
    }

export interface LogoLoopProps {
  logos: LogoItem[]
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 80,
  direction = 'left',
  logoHeight = 32,
  gap = 40,
  fadeOut = true,
  fadeOutColor = 'var(--bg)',
  scaleOnHover = true,
  ariaLabel = 'Logos',
  className
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      el.style.transform = 'translate3d(0, 0, 0)'
      return
    }

    const totalWidth = el.scrollWidth
    if (!totalWidth) return

    const singleWidth = totalWidth / 2
    if (!singleWidth) return

    let offset = 0
    let lastTime: number | null = null
    const dir = direction === 'left' ? 1 : -1
    const pxPerSecond = Math.max(10, speed)

    const step = (timestamp: number) => {
      if (lastTime == null) {
        lastTime = timestamp
      }
      const delta = (timestamp - lastTime) / 1000
      lastTime = timestamp

      offset += dir * pxPerSecond * delta
      offset = ((offset % singleWidth) + singleWidth) % singleWidth

      const translateX = -offset
      el.style.transform = `translate3d(${translateX}px, 0, 0)`

      animationFrame = requestAnimationFrame(step)
    }

    let animationFrame = requestAnimationFrame(step)

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame)
    }
  }, [logos.length, speed, gap, direction])

  const renderItem = (item: LogoItem, key: number) => {
    const base =
      'flex-none flex items-center justify-center mx-[var(--logo-gap)] text-[length:var(--logo-size)] leading-none'

    const content =
      'node' in item ? (
        <span
          className={scaleOnHover ? 'transition-transform duration-300 group-hover:scale-110' : ''}
        >
          {item.node}
        </span>
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? item.title ?? ''}
          width={item.width}
          height={item.height}
          className={
            'h-[var(--logo-size)] w-auto object-contain ' +
            (scaleOnHover ? 'transition-transform duration-300 group-hover:scale-110' : '')
          }
          loading="lazy"
          decoding="async"
        />
      )

    const label =
      'node' in item ? item.ariaLabel ?? item.title : item.alt ?? item.title ?? 'Logo link'

    if ('href' in item && item.href) {
      return (
        <a
          key={key}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={base + ' no-underline'}
        >
          {content}
        </a>
      )
    }

    return (
      <div key={key} className={base} aria-label={label}>
        {content}
      </div>
    )
  }

  const allLogos = [...logos, ...logos]

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group ${className ?? ''}`}
      aria-label={ariaLabel}
      role="region"
      style={
        {
          '--logo-size': `${logoHeight}px`,
          '--logo-gap': `${gap / 2}px`
        } as React.CSSProperties
      }
    >
      {fadeOut && (
        <>
          <div
            aria-hidden
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`
            }}
            className="pointer-events-none absolute inset-y-0 left-0 w-12 z-10"
          />
          <div
            aria-hidden
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`
            }}
            className="pointer-events-none absolute inset-y-0 right-0 w-12 z-10"
          />
        </>
      )}

      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap will-change-transform"
      >
        {allLogos.map((item, idx) => renderItem(item, idx))}
      </div>
    </div>
  )
}

export default LogoLoop

