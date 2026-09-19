import { useEffect, useState } from 'react'
import {
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  FolderGit2,
  Layers,
  User,
} from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { getTechIcon } from '@/components/tech-icons'
import { Badge } from '@/components/ui/badge'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel'
import { projects } from '@/data/portfolio'

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'production' | 'personal'>('all')
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const filteredProjects = projects.filter((p) => {
    if (filter === 'production') return p.category === 'Production / In-House'
    if (filter === 'personal') return p.category === 'Personal / Architecture'
    return true
  })

  useEffect(() => {
    if (!api) return

    const updateState = () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setCount(api.scrollSnapList().length)
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    updateState()
    api.on('select', updateState)
    api.on('reInit', updateState)

    return () => {
      api.off('select', updateState)
      api.off('reInit', updateState)
    }
  }, [api])

  return (
    <section id="projects" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="text-muted-foreground size-4" />
          <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
            Featured Systems & Key Projects
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {count > 1 && (
            <span className="text-muted-foreground font-mono text-xs">
              Slide {String(current).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
          )}

          <span className="text-muted-foreground hidden font-mono text-xs sm:inline">·</span>

          <span className="text-muted-foreground font-mono text-xs">{projects.length} Systems</span>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-1 pl-1">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              className={`border-border/70 hover:border-foreground/30 hover:bg-muted/60 inline-flex size-7 items-center justify-center rounded-md border transition-all ${
                !canScrollPrev
                  ? 'text-muted-foreground/30 pointer-events-none opacity-40'
                  : 'text-muted-foreground hover:text-foreground cursor-pointer'
              }`}
              aria-label="Previous project slide"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              className={`border-border/70 hover:border-foreground/30 hover:bg-muted/60 inline-flex size-7 items-center justify-center rounded-md border transition-all ${
                !canScrollNext
                  ? 'text-muted-foreground/30 pointer-events-none opacity-40'
                  : 'text-muted-foreground hover:text-foreground cursor-pointer'
              }`}
              aria-label="Next project slide"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`cursor-pointer rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all ${
            filter === 'all'
              ? 'bg-foreground text-background shadow-xs'
              : 'border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/60 border bg-transparent'
          }`}
        >
          All ({projects.length})
        </button>
        <button
          onClick={() => setFilter('production')}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all ${
            filter === 'production'
              ? 'bg-foreground text-background shadow-xs'
              : 'border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/60 border bg-transparent'
          }`}
        >
          <Building2 className="size-3" />
          Production & In-House (
          {projects.filter((p) => p.category === 'Production / In-House').length})
        </button>
        <button
          onClick={() => setFilter('personal')}
          className={`inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all ${
            filter === 'personal'
              ? 'bg-foreground text-background shadow-xs'
              : 'border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/60 border bg-transparent'
          }`}
        >
          <User className="size-3" />
          Personal & Architecture (
          {projects.filter((p) => p.category === 'Personal / Architecture').length})
        </button>
      </div>

      {/* Embla Carousel */}
      <Carousel
        key={filter}
        setApi={setApi}
        opts={{
          align: 'start',
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-6 items-stretch">
          {filteredProjects.map((proj) => (
            <CarouselItem key={proj.title} className="flex pl-6 md:basis-1/2">
              <div className="border-border/75 bg-card/50 hover:border-foreground/25 hover:bg-card/80 group relative flex w-full flex-col justify-between overflow-hidden rounded-lg border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs">
                {/* Subtle top edge highlight */}
                <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />

                <div className="space-y-4">
                  {/* Card Header */}
                  <div className="border-border/40 flex items-start justify-between gap-3 border-b pb-3.5">
                    <div className="space-y-1.5">
                      {/* Context & Period Badges */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-sm px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide uppercase ${
                            proj.category === 'Production / In-House'
                              ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                              : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              proj.category === 'Production / In-House'
                                ? 'bg-emerald-500'
                                : 'bg-blue-500'
                            }`}
                          />
                          {proj.category === 'Production / In-House'
                            ? 'Production'
                            : 'Architecture'}
                        </span>

                        {proj.companyContext && (
                          <span className="text-muted-foreground/80 inline-flex items-center gap-1 font-mono text-[11px]">
                            <FolderGit2 className="size-3" />
                            {proj.companyContext}
                          </span>
                        )}

                        {proj.period && (
                          <span className="text-muted-foreground/60 font-mono text-[11px]">
                            · {proj.period}
                          </span>
                        )}
                      </div>

                      <h3 className="text-foreground group-hover:text-primary text-base font-bold tracking-tight transition-colors">
                        {proj.title}
                      </h3>
                      {proj.subtitle && (
                        <p className="text-muted-foreground font-mono text-xs">{proj.subtitle}</p>
                      )}
                    </div>

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted inline-flex size-7 shrink-0 items-center justify-center rounded border transition-colors"
                        aria-label={`GitHub repo for ${proj.title}`}
                      >
                        <GithubIcon className="size-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Minimalist Architecture Data-Flow */}
                  {proj.architectureFlow && (
                    <div className="border-border/50 bg-muted/30 rounded-md border p-2.5">
                      <div className="text-muted-foreground/80 mb-1 font-mono text-[10px] font-semibold tracking-wider uppercase">
                        Data & Pipeline Topology:
                      </div>
                      <div className="text-foreground/90 font-mono text-xs leading-relaxed">
                        {proj.architectureFlow}
                      </div>
                    </div>
                  )}

                  {/* Problem / Architecture breakdown */}
                  <div className="text-muted-foreground space-y-2.5 text-xs leading-relaxed">
                    <div className="border-border/40 bg-muted/20 rounded border p-2.5">
                      <div className="text-foreground/90 mb-1 font-mono font-semibold">
                        PROBLEM & CHALLENGE:
                      </div>
                      <p className="text-foreground/85">{proj.problem}</p>
                    </div>

                    <div className="border-border/40 bg-muted/20 rounded border p-2.5">
                      <div className="text-foreground/90 mb-1 flex items-center gap-1.5 font-mono font-semibold">
                        <Layers className="text-primary size-3" />
                        <span>ARCHITECTURE & SOLUTION:</span>
                      </div>
                      <p className="text-foreground/85">{proj.solution}</p>
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-foreground/80 font-mono text-[11px] font-semibold tracking-wider uppercase">
                      Key Outcomes & Metrics:
                    </div>
                    {proj.results.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        className="text-muted-foreground flex items-start gap-2 text-xs"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        <span className="text-foreground/85">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges with Icons */}
                <div className="border-border/40 mt-6 flex flex-wrap gap-1.5 border-t pt-4">
                  {proj.technologies.map((tech) => {
                    const icon = getTechIcon(tech)
                    return (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-muted-foreground border-border/60 hover:border-foreground/30 hover:bg-muted/40 gap-1.5 px-2 py-0.5 font-mono text-[11px] transition-colors"
                      >
                        {icon && <span className="text-foreground/70">{icon}</span>}
                        <span>{tech}</span>
                      </Badge>
                    )
                  })}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination indicators / dots */}
      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: count }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => api?.scrollTo(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                current === idx + 1
                  ? 'bg-foreground w-6'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/60 w-2'
              }`}
            />
          ))}
        </div>
      )}
    </section>
  )
}
