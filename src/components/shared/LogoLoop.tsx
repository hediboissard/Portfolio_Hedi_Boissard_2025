import React, { useEffect, useRef, useState } from 'react'

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
  logoHeightMobile?: number
  gap?: number
  gapMobile?: number
  fadeOut?: boolean
  fadeOutColor?: string
  ariaLabel?: string
  className?: string
}

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 80,
  direction = 'left',
  logoHeight = 32,
  logoHeightMobile,
  gap = 40,
  gapMobile,
  fadeOut = true,
  fadeOutColor = 'var(--bg)',
  ariaLabel = 'Logos',
  className
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  const effectiveLogoHeight = (logoHeightMobile != null && isMobile) ? logoHeightMobile : logoHeight
  const effectiveGap = (gapMobile != null && isMobile) ? gapMobile : gap

  useEffect(() => {
    const el = trackRef.current
    const container = containerRef.current
    if (!el || !container) return

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      el.style.transform = 'translate3d(0, 0, 0)'
      return
    }

    let rafId = 0
    let offset = 0
    let lastTime = 0
    let isVisible = true
    let cachedSingleWidth = 0
    const dir = direction === 'left' ? 1 : -1
    const pxPerSecond = Math.max(15, speed * 1.5)

    // Pause animation when off-screen
    const visObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          lastTime = 0 // reset delta to avoid jump
        }
      },
      { threshold: 0 }
    )
    visObserver.observe(container)

    const tick = (now: number) => {
      rafId = requestAnimationFrame(tick)

      if (!isVisible) return

      if (!cachedSingleWidth) {
        const totalWidth = el.scrollWidth
        if (!totalWidth) return
        cachedSingleWidth = totalWidth / 3
      }

      if (lastTime > 0) {
        const delta = (now - lastTime) / 1000
        offset += dir * pxPerSecond * delta
      }
      lastTime = now

      while (offset >= cachedSingleWidth) offset -= cachedSingleWidth
      while (offset < 0) offset += cachedSingleWidth

      el.style.transform = `translate3d(${-offset}px, 0, 0)`
    }

    rafId = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(rafId)
      visObserver.disconnect()
    }
  }, [logos.length, speed, direction, effectiveGap, effectiveLogoHeight])

  const renderItem = (item: LogoItem, key: number) => {
    const base =
      'flex-none flex items-center justify-center mx-[var(--logo-gap)] text-[length:var(--logo-size)] leading-none'

    const content =
      'node' in item ? (
        <span>{item.node}</span>
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? item.title ?? ''}
          width={item.width}
          height={item.height}
          className={`h-[var(--logo-size)] w-auto object-contain ${
            item.src.includes('php.svg')
              ? 'brightness-0 invert'
              : item.src.includes('nextjs.svg')
                ? 'scale-[1.15]'
                : ''
          }`}
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

  const allLogos = [...logos, ...logos, ...logos]

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className ?? ''}`}
      aria-label={ariaLabel}
      role="region"
      style={
        {
          '--logo-size': `${effectiveLogoHeight}px`,
          '--logo-gap': `${effectiveGap / 2}px`
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
