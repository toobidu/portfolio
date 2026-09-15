import { Cpu } from 'lucide-react'
import { getTechIcon } from '@/components/tech-icons'
import { skillCategories } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center gap-2">
        <Cpu className="text-muted-foreground size-4" />
        <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
          Technical Stack & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group) => (
          <div
            key={group.category}
            className="border-border/70 bg-card/40 hover:border-border space-y-3.5 rounded-lg border p-4.5 transition-colors"
          >
            <h3 className="text-muted-foreground border-border/40 border-b pb-2 font-mono text-xs font-semibold tracking-wider uppercase">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const icon = getTechIcon(skill)
                return (
                  <div
                    key={skill}
                    className="border-border/70 bg-muted/30 text-foreground/90 hover:border-foreground/30 hover:bg-muted/60 inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 font-mono text-xs transition-all"
                  >
                    {icon && <span className="text-foreground/70 shrink-0">{icon}</span>}
                    <span>{skill}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
