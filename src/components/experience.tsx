import { Briefcase, FolderGit2 } from 'lucide-react'
import { getTechIcon } from '@/components/tech-icons'
import { Badge } from '@/components/ui/badge'
import { experiences } from '@/data/portfolio'

export function Experience() {
  return (
    <section id="experience" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center gap-2">
        <Briefcase className="text-muted-foreground size-4" />
        <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
          Work Experience
        </h2>
      </div>

      <div className="border-border/80 relative ml-2 space-y-12 border-l pl-6">
        {experiences.map((item) => (
          <div key={item.company} className="group relative">
            {/* Timeline bullet */}
            <div className="border-background bg-foreground/60 group-hover:bg-foreground absolute top-1.5 -left-[31px] size-2.5 rounded-full border-2 transition-colors" />

            <div className="space-y-4">
              {/* Company & Role Header */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-foreground text-lg font-bold tracking-tight">
                    {item.role} <span className="text-primary font-medium">· {item.company}</span>
                  </h3>
                  <span className="text-muted-foreground font-mono text-xs">{item.period}</span>
                </div>

                <div className="text-muted-foreground/80 font-mono text-xs">{item.location}</div>

                {item.description && (
                  <p className="text-muted-foreground/90 pt-1 text-xs italic">{item.description}</p>
                )}
              </div>

              {/* Company Projects List */}
              {item.projects && item.projects.length > 0 ? (
                <div className="mt-3 space-y-4">
                  {item.projects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="border-border/75 bg-card/50 hover:border-foreground/25 hover:bg-card/80 group/sub relative overflow-hidden rounded-lg border p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs"
                    >
                      {/* Subtle top edge highlight */}
                      <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />

                      {/* Project Header */}
                      <div className="border-border/40 flex flex-wrap items-start justify-between gap-2 border-b pb-3">
                        <div className="flex items-center gap-2">
                          <FolderGit2 className="text-primary size-3.5 shrink-0" />
                          <h4 className="text-foreground text-sm font-semibold tracking-tight">
                            {proj.name}
                          </h4>
                        </div>
                        {proj.period && (
                          <span className="text-muted-foreground font-mono text-[11px]">
                            {proj.period}
                          </span>
                        )}
                      </div>

                      {/* Project Description */}
                      {proj.description && (
                        <p className="text-muted-foreground mt-2 text-xs leading-relaxed">
                          {proj.description}
                        </p>
                      )}

                      {/* Project Achievements */}
                      <ul className="text-muted-foreground mt-2.5 space-y-2 text-xs leading-relaxed">
                        {proj.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2">
                            <span className="text-primary/70 mt-0.5 text-[11px] font-bold select-none">
                              ›
                            </span>
                            <span className="text-foreground/85">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Project Tech Stack */}
                      <div className="border-border/20 mt-3.5 flex flex-wrap gap-1.5 border-t pt-2">
                        {proj.technologies.map((tech) => {
                          const icon = getTechIcon(tech)
                          return (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-foreground/75 border-border/50 gap-1 rounded px-1.5 py-0.5 font-mono text-[10px]"
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
              ) : (
                /* Fallback to flat highlights if no projects */
                item.highlights && (
                  <ul className="text-muted-foreground mt-2 space-y-2 text-sm leading-relaxed">
                    {item.highlights.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-foreground/40 mt-1 select-none">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )
              )}

              {/* Company-wide Tech Overview */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="text-muted-foreground mr-1 font-mono text-[11px] font-medium">
                  Stack:
                </span>
                {item.tags.map((tag) => {
                  const icon = getTechIcon(tag)
                  return (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-foreground/80 border-border/40 gap-1.5 rounded border px-2 py-0.5 font-mono text-[11px]"
                    >
                      {icon && <span className="text-foreground/70">{icon}</span>}
                      <span>{tag}</span>
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
