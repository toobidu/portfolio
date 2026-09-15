import { Briefcase } from 'lucide-react'
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

      <div className="border-border/80 relative ml-2 space-y-10 border-l pl-6">
        {experiences.map((item) => (
          <div key={item.company} className="group relative">
            {/* Timeline bullet */}
            <div className="border-background bg-foreground/60 group-hover:bg-foreground absolute top-1.5 -left-[31px] size-2.5 rounded-full border-2 transition-colors" />

            <div className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="text-foreground text-base font-semibold">
                  {item.role}{' '}
                  <span className="text-muted-foreground font-normal">· {item.company}</span>
                </h3>
                <span className="text-muted-foreground font-mono text-xs">{item.period}</span>
              </div>

              <div className="text-muted-foreground/80 font-mono text-xs">{item.location}</div>

              {/* Highlights */}
              <ul className="text-muted-foreground mt-2 space-y-2 text-sm leading-relaxed">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <span className="text-foreground/40 mt-1 select-none">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags with Icons */}
              <div className="flex flex-wrap gap-1.5 pt-2">
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
