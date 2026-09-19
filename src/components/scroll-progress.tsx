import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'availability', label: 'Availability' },
  { id: 'contact', label: 'Contact' },
]

function getBottomActiveIndex(winHeight: number): number {
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id)
    if (el && el.getBoundingClientRect().top <= winHeight * 0.65) {
      return i
    }
  }
  return 0
}

function getTriggerActiveIndex(triggerOffset: number): number {
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i].id)
    if (el && el.getBoundingClientRect().top <= triggerOffset) {
      return i
    }
  }
  return 0
}

function calculateSectionFraction(
  sectionId: string,
  isAtBottom: boolean,
  isLastSection: boolean,
): number {
  if (isAtBottom && isLastSection) {
    return 1
  }
  const currentEl = document.getElementById(sectionId)
  if (!currentEl) {
    return 0
  }
  const rect = currentEl.getBoundingClientRect()
  const scrolledIntoSection = Math.max(0, 100 - rect.top)
  const sectionHeight = Math.max(1, currentEl.offsetHeight)
  return Math.min(1, Math.max(0, scrolledIntoSection / sectionHeight))
}

function renderWaypointDot(isActive: boolean, isPassed: boolean) {
  if (isActive) {
    return (
      <span className="relative flex size-4 items-center justify-center">
        <span className="border-primary bg-background ring-primary/25 absolute size-4 rounded-full border-2 shadow-xs ring-4" />
        <span className="bg-primary relative size-1.5 animate-pulse rounded-full" />
      </span>
    )
  }
  if (isPassed) {
    return (
      <span className="bg-primary border-background ring-primary/40 size-2.5 rounded-full border-2 shadow-xs ring-1 transition-all duration-200 group-hover:scale-125" />
    )
  }
  return (
    <span className="border-muted-foreground/60 bg-background group-hover:border-foreground size-2.5 rounded-full border-2 transition-all duration-200 group-hover:scale-125" />
  )
}

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [trackProgress, setTrackProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    let ticking = false

    const updateScrollState = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const totalScrollable = docHeight - winHeight

      const pageProgress =
        totalScrollable > 0 ? Math.min(100, Math.max(0, (scrollY / totalScrollable) * 100)) : 0
      setScrollProgress(pageProgress)

      if (scrollY <= 20) {
        setActiveSection(sections[0].id)
        setTrackProgress(0)
        return
      }

      const isAtBottom = totalScrollable > 0 && winHeight + scrollY >= docHeight - 20
      const currentIdx = isAtBottom ? getBottomActiveIndex(winHeight) : getTriggerActiveIndex(100)

      setActiveSection(sections[currentIdx].id)

      const fraction = calculateSectionFraction(
        sections[currentIdx].id,
        isAtBottom,
        currentIdx === sections.length - 1,
      )
      const lineProgress = Math.min(1, Math.max(0, (currentIdx + fraction) / (sections.length - 1)))
      setTrackProgress(lineProgress)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          updateScrollState()
          ticking = false
        })
      }
    }

    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sections.some((s) => s.id === hash)) {
        setActiveSection(hash)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('hashchange', onHashChange)
    updateScrollState()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const activeIndex = sections.findIndex((sec) => sec.id === activeSection)

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="from-primary/80 via-primary pointer-events-none fixed top-0 right-0 left-0 z-50 h-[2.5px] origin-left bg-gradient-to-r to-emerald-400 transition-all duration-75"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Left Vertical Section Tracker */}
      <aside
        aria-label="Page navigation and scroll progress"
        className="fixed top-1/2 left-4 z-40 hidden -translate-y-1/2 flex-col items-center select-none xl:left-8 xl:flex 2xl:left-14"
      >
        {/* Percentage badge */}
        <div className="border-border/70 bg-background/90 text-muted-foreground mb-3 rounded-full border px-2 py-0.5 font-mono text-[10px] font-semibold shadow-xs backdrop-blur-xs">
          {Math.round(scrollProgress)}%
        </div>

        {/* Vertical Track & Dots */}
        <div className="relative flex flex-col items-center">
          <div className="bg-border/70 absolute top-3 bottom-3 left-1/2 w-[2px] -translate-x-1/2 rounded-full" />

          <div
            className="bg-primary absolute top-3 left-1/2 w-[2px] -translate-x-1/2 rounded-full transition-[height] duration-75 ease-out"
            style={{
              height: `calc((100% - 24px) * ${trackProgress})`,
            }}
          />

          <div className="relative z-10 flex flex-col gap-5">
            {sections.map((sec, index) => {
              const isActive = index === activeIndex
              const isPassed = index < activeIndex

              return (
                <div key={sec.id} className="group relative flex items-center">
                  <button
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className="flex size-6 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110 focus:outline-none"
                    aria-label={`Scroll to ${sec.label}`}
                  >
                    {renderWaypointDot(isActive, isPassed)}
                  </button>

                  {/* Tooltip Pill */}
                  <button
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`absolute left-8 cursor-pointer rounded-md border px-2.5 py-1 font-mono text-xs font-medium whitespace-nowrap shadow-xs transition-all duration-150 ${
                      isActive
                        ? 'border-primary/40 bg-card/95 text-primary translate-x-0 opacity-100'
                        : 'border-border/60 bg-card/90 text-muted-foreground hover:text-foreground pointer-events-none -translate-x-2 opacity-0 group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  >
                    {sec.label}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
}
