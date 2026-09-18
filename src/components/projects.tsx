import { useState } from 'react'
import { Building2, CheckCircle2, Code2, FolderGit2, Layers, User } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { getTechIcon } from '@/components/tech-icons'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/portfolio'

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'production' | 'personal'>('all')

  const filteredProjects = projects.filter((p) => {
    if (filter === 'production') return p.category === 'Production / In-House'
    if (filter === 'personal') return p.category === 'Personal / Architecture'
    return true
  })

  return (
    <section id="projects" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="text-muted-foreground size-4" />
          <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
            Featured Systems & Key Projects
          </h2>
        </div>
        <span className="text-muted-foreground font-mono text-xs">
          {projects.length} Hệ thống & Dự án Thực tế
        </span>
      </div>

      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`cursor-pointer rounded-md px-3 py-1.5 font-mono text-xs font-medium transition-all ${
            filter === 'all'
              ? 'bg-foreground text-background shadow-xs'
              : 'border-border/70 text-muted-foreground hover:text-foreground hover:bg-muted/60 border bg-transparent'
          }`}
        >
          Tất cả ({projects.length})
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
          Dự án Doanh nghiệp & In-House (
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
          Dự án Cá nhân & Kiến trúc (
          {projects.filter((p) => p.category === 'Personal / Architecture').length})
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {filteredProjects.map((proj) => (
          <div
            key={proj.title}
            className="border-border/70 bg-card/40 hover:border-border group flex flex-col justify-between rounded-lg border p-6 transition-all hover:shadow-xs"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="border-border/40 flex items-start justify-between gap-3 border-b pb-3.5">
                <div className="space-y-1.5">
                  {/* Context & Period Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    {proj.companyContext && (
                      <span className="bg-primary/10 text-primary inline-flex items-center gap-1 rounded-sm px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wide uppercase">
                        <FolderGit2 className="size-2.5" />
                        {proj.companyContext}
                      </span>
                    )}
                    {proj.period && (
                      <span className="text-muted-foreground/80 font-mono text-[11px]">
                        {proj.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-foreground group-hover:text-primary text-base font-bold tracking-tight transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-xs">{proj.subtitle}</p>
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

              {/* Problem / Architecture breakdown */}
              <div className="text-muted-foreground space-y-2.5 text-xs leading-relaxed">
                <div className="border-border/40 bg-muted/20 rounded border p-2.5">
                  <div className="text-foreground/90 mb-1 font-mono font-semibold">
                    BÀI TOÁN & THÁCH THỨC:
                  </div>
                  <p className="text-foreground/85">{proj.problem}</p>
                </div>

                <div className="border-border/40 bg-muted/20 rounded border p-2.5">
                  <div className="text-foreground/90 mb-1 flex items-center gap-1.5 font-mono font-semibold">
                    <Layers className="text-primary size-3" />
                    <span>KIẾN TRÚC & GIẢI PHÁP:</span>
                  </div>
                  <p className="text-foreground/85">{proj.solution}</p>
                </div>
              </div>

              {/* Key Results */}
              <div className="space-y-1.5 pt-1">
                <div className="text-foreground/80 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  Kết quả nổi bật:
                </div>
                {proj.results.map((res, rIdx) => (
                  <div key={rIdx} className="text-muted-foreground flex items-start gap-2 text-xs">
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
                    className="text-muted-foreground border-border/60 gap-1.5 px-2 py-0.5 font-mono text-[11px]"
                  >
                    {icon && <span className="text-foreground/70">{icon}</span>}
                    <span>{tech}</span>
                  </Badge>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
