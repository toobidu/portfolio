import { GraduationCap } from 'lucide-react'
import { education } from '@/data/portfolio'

export function Education() {
  return (
    <section id="education" className="border-border/40 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center gap-2">
        <GraduationCap className="text-muted-foreground size-4" />
        <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">Education</h2>
      </div>

      <div className="border-border/75 bg-card/50 hover:border-foreground/20 group relative space-y-4 overflow-hidden rounded-lg border p-5 transition-all duration-200">
        {/* Subtle top edge highlight */}
        <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div className="flex items-start gap-3.5">
            {education.logoUrl && (
              <div className="border-border/60 size-12 shrink-0 overflow-hidden rounded-lg border bg-white p-1 shadow-xs dark:bg-white/95">
                <img
                  src={education.logoUrl}
                  alt={education.institution}
                  className="size-full object-contain"
                />
              </div>
            )}
            <div>
              <h3 className="text-foreground text-base font-semibold">{education.institution}</h3>
              <div className="text-primary pt-1 font-mono text-xs font-medium">
                {education.degree} · {education.location}
              </div>
            </div>
          </div>
          <span className="text-muted-foreground shrink-0 font-mono text-xs sm:pt-0.5">
            {education.period}
          </span>
        </div>

        {/* {education.highlights && education.highlights.length > 0 && (
          <ul className="border-border/40 text-muted-foreground space-y-1.5 border-t pt-3 text-xs">
            {education.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-foreground/40 mt-0.5">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </section>
  )
}
