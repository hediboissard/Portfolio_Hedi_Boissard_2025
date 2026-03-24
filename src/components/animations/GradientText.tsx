import { useState, useCallback, useEffect, useMemo, type ReactNode } from 'react'

interface GradientTextProps {
  children: ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
  showBorder?: boolean
  direction?: 'horizontal' | 'vertical' | 'diagonal'
  pauseOnHover?: boolean
  yoyo?: boolean
}

export default function GradientText({
  children,
  className = '',
  colors = ['#5227FF', '#FF9FFC', '#B19EEF'],
  animationSpeed = 8,
  showBorder = false,
  direction = 'horizontal',
  pauseOnHover = false
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPrefersReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true)
  }, [pauseOnHover])

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false)
  }, [pauseOnHover])

  const gradientAngle =
    direction === 'horizontal' ? 'to right' : direction === 'vertical' ? 'to bottom' : 'to bottom right'
  const gradientColors = [...colors, colors[0]].join(', ')

  const bgSize =
    direction === 'horizontal' ? '300% 100%' : direction === 'vertical' ? '100% 300%' : '300% 300%'

  const animName = direction === 'horizontal' ? 'gradient-x' : direction === 'vertical' ? 'gradient-y' : 'gradient-x'
  const animDuration = `${animationSpeed}s`

  const gradientStyle = useMemo(() => ({
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize: bgSize,
    backgroundRepeat: 'repeat' as const,
    animation: prefersReduced ? 'none' : `${animName} ${animDuration} ease-in-out infinite alternate`,
    animationPlayState: isPaused ? 'paused' as const : 'running' as const
  }), [gradientAngle, gradientColors, bgSize, prefersReduced, animName, animDuration, isPaused])

  return (
    <div
      className={`relative flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium transition-shadow duration-500 overflow-hidden cursor-default ${showBorder ? 'py-1 px-2' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showBorder && (
        <div
          className="absolute inset-0 z-0 pointer-events-none rounded-[1.25rem]"
          style={gradientStyle}
        >
          <div
            className="absolute bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: 'calc(100% - 2px)',
              height: 'calc(100% - 2px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          />
        </div>
      )}
      <div
        className="inline-block relative z-10 text-transparent bg-clip-text"
        style={{
          ...gradientStyle,
          WebkitBackgroundClip: 'text'
        }}
      >
        {children}
      </div>
    </div>
  )
}
