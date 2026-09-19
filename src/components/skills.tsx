import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Cpu, MoveHorizontal } from 'lucide-react'
import { getTechIcon } from '@/components/tech-icons'
import { skillCategories } from '@/data/portfolio'

export function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = 340
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Mouse drag-to-scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeftState(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    scrollRef.current.scrollLeft = scrollLeftState - walk
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  return (
    <section id="skills" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Cpu className="text-muted-foreground size-4" />
          <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
            Technical Stack & Core Tools
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-muted-foreground hidden items-center gap-1.5 font-mono text-xs sm:flex">
            <MoveHorizontal className="size-3.5" />
            <span>Scroll horizontally</span>
          </div>

          <span className="text-muted-foreground hidden font-mono text-xs sm:inline">·</span>

          <span className="text-muted-foreground font-mono text-xs">
            {skillCategories.reduce((acc, g) => acc + g.skills.length, 0)} Verified Technologies
          </span>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-1 pl-1">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`border-border/70 hover:border-foreground/30 hover:bg-muted/60 inline-flex size-7 items-center justify-center rounded-md border transition-all ${
                !canScrollLeft
                  ? 'text-muted-foreground/30 pointer-events-none opacity-40'
                  : 'text-muted-foreground hover:text-foreground cursor-pointer'
              }`}
              aria-label="Scroll skills left"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`border-border/70 hover:border-foreground/30 hover:bg-muted/60 inline-flex size-7 items-center justify-center rounded-md border transition-all ${
                !canScrollRight
                  ? 'text-muted-foreground/30 pointer-events-none opacity-40'
                  : 'text-muted-foreground hover:text-foreground cursor-pointer'
              }`}
              aria-label="Scroll skills right"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Relative container with edge fade masks */}
      <div className="relative">
        {/* Left fade gradient */}
        <div
          className={`from-background pointer-events-none absolute top-0 bottom-4 left-0 z-10 w-8 bg-gradient-to-r to-transparent transition-opacity duration-200 ${
            canScrollLeft ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Right fade gradient */}
        <div
          className={`from-background pointer-events-none absolute top-0 right-0 bottom-4 z-10 w-8 bg-gradient-to-l to-transparent transition-opacity duration-200 ${
            canScrollRight ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Horizontal Track */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Skills categories horizontal deck"
          tabIndex={0}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-1 pb-4 focus:outline-none ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {skillCategories.map((group) => (
            <div
              key={group.category}
              className="border-border/75 bg-card/50 hover:border-foreground/25 hover:bg-card/80 group relative flex w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-lg border p-4.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs sm:w-[320px]"
            >
              {/* Subtle top edge highlight */}
              <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />

              <div>
                <div className="border-border/40 flex items-center justify-between border-b pb-2.5">
                  <h3 className="text-foreground/90 font-mono text-xs font-semibold tracking-wider uppercase">
                    {group.category}
                  </h3>
                  <span className="text-muted-foreground/70 font-mono text-[10px]">
                    {group.skills.length} tools
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => {
                    const icon = getTechIcon(skill)
                    return (
                      <div
                        key={skill}
                        className="border-border/60 bg-muted/40 text-foreground/90 hover:border-foreground/30 hover:bg-muted/80 hover:text-foreground inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-all duration-150 select-none hover:scale-[1.02]"
                      >
                        {icon && <span className="text-foreground/70 shrink-0">{icon}</span>}
                        <span>{skill}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
