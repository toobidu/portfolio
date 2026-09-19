import { useEffect, useState } from 'react'
import { Clock, Globe } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export function Availability() {
  const [timeState, setTimeState] = useState({
    hanoi: '',
    cet: '',
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hanoiStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Bangkok',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now)

      const cetStr = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now)

      setTimeState({ hanoi: hanoiStr, cet: cetStr })
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="availability" className="border-border/60 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Globe className="text-muted-foreground size-4" />
          <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
            Remote Availability & Timezone Overlap
          </h2>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
          <span>Active & Ready</span>
        </span>
      </div>

      <div className="border-border/75 bg-card/50 hover:border-foreground/20 group relative space-y-6 overflow-hidden rounded-lg border p-6 transition-all duration-200">
        {/* Subtle top edge highlight */}
        <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />

        {/* Top bar: Status & Telemetry World Clocks */}
        <div className="border-border/40 flex flex-col justify-between gap-5 border-b pb-5 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-foreground text-sm font-semibold tracking-tight">
                {personalInfo.availability.status}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Target Collaboration: {personalInfo.availability.targetRegion}
            </p>
          </div>

          {/* Unix Telemetry Clocks */}
          <div className="flex flex-wrap items-center gap-3 font-mono">
            {/* Hanoi Clock */}
            <div className="border-border/70 bg-muted/40 rounded-md border px-3 py-1.5">
              <div className="text-muted-foreground/70 flex items-center justify-between gap-3 text-[10px] tracking-wider uppercase">
                <span>Hanoi (ICT)</span>
                <span className="text-muted-foreground/50">UTC+7</span>
              </div>
              <div className="text-foreground mt-0.5 flex items-center gap-1.5 text-sm font-bold tracking-widest">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span>{timeState.hanoi || '--:--:--'}</span>
              </div>
            </div>

            {/* Berlin / Paris Clock */}
            <div className="border-border/70 bg-muted/40 rounded-md border px-3 py-1.5">
              <div className="text-muted-foreground/70 flex items-center justify-between gap-3 text-[10px] tracking-wider uppercase">
                <span>Berlin / Paris (CET)</span>
                <span className="text-muted-foreground/50">UTC+1</span>
              </div>
              <div className="text-foreground mt-0.5 flex items-center gap-1.5 text-sm font-bold tracking-widest">
                <span className="size-1.5 rounded-full bg-blue-500" />
                <span>{timeState.cet || '--:--:--'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual 24-Hour Timezone Overlap Timeline */}
        <div className="border-border/40 bg-muted/20 space-y-3 rounded-lg border p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-foreground flex items-center gap-2 text-xs font-semibold">
              <Clock className="text-primary size-3.5" />
              <span>Daily Working Window & EU Synchronous Overlap</span>
            </div>
            <span className="font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
              ★ ~5 Hours Daily Real-Time Overlap
            </span>
          </div>

          {/* Overlap Bar Visualizer */}
          <div className="space-y-1.5">
            <div className="border-border/60 bg-muted/60 relative h-7 overflow-hidden rounded-md border">
              {/* EU Business Day Background Guide: 09:00 - 18:00 CET (37.5% to 75%) */}
              <div
                className="bg-muted-foreground/10 absolute top-0 bottom-0"
                style={{ left: '37.5%', width: '37.5%' }}
                title="European Standard Business Day (09:00 - 18:00 CET)"
              />

              {/* Dung Working Window in CET: 13:00 - 20:00 CET (54.1% to 83.3%) */}
              <div
                className="bg-primary/20 border-primary/40 absolute top-0 bottom-0 border-r border-l"
                style={{ left: '54.1%', width: '29.2%' }}
                title="Dung Working Window: 19:00–24:00+ ICT (13:00–18:00+ CET)"
              />

              {/* Exact Synchronous Overlap Highlight: 13:00 - 18:00 CET (54.1% to 75%) */}
              <div
                className="absolute top-0 bottom-0 flex items-center justify-center border-r border-l border-emerald-500/60 bg-emerald-500/25 px-2 text-center"
                style={{ left: '54.1%', width: '20.9%' }}
              >
                <span className="truncate font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300">
                  Synchronous Overlap (13:00–18:00 CET)
                </span>
              </div>
            </div>

            {/* Timeline Tick Labels (CET Time) */}
            <div className="text-muted-foreground/70 flex justify-between font-mono text-[10px]">
              <span>00:00</span>
              <span>06:00</span>
              <span className="text-muted-foreground font-semibold">12:00 CET</span>
              <span>18:00</span>
              <span>24:00</span>
            </div>
          </div>

          <div className="text-muted-foreground/80 flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-[11px]">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5">
                <span className="bg-muted-foreground/20 size-2 rounded-xs" />
                <span>EU Business Day (09:00–18:00 CET)</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-xs bg-emerald-500/50" />
                <span className="text-foreground/90">Direct Collaboration Window</span>
              </span>
            </div>
            <span className="text-muted-foreground font-mono">19:00–24:00+ ICT (UTC+7)</span>
          </div>
        </div>

        {/* Schedule Detail Boxes */}
        <div className="grid grid-cols-1 gap-3.5 text-xs sm:grid-cols-2">
          <div className="border-border/50 bg-muted/20 hover:border-border/80 hover:bg-muted/30 rounded-lg border p-3.5 transition-colors">
            <div className="text-foreground mb-1.5 flex items-center gap-1.5 font-semibold">
              <Clock className="text-muted-foreground size-3.5" />
              <span>Weekday Delivery Window</span>
            </div>
            <p className="text-foreground/85 font-mono text-[11px]">
              {personalInfo.availability.schedule}
            </p>
            <p className="text-muted-foreground mt-1.5 leading-relaxed">
              Covers core standups, sprint reviews, and afternoon PR reviews with European
              engineering teams.
            </p>
          </div>

          <div className="border-border/50 bg-muted/20 hover:border-border/80 hover:bg-muted/30 rounded-lg border p-3.5 transition-colors">
            <div className="text-foreground mb-1.5 flex items-center gap-1.5 font-semibold">
              <Clock className="text-muted-foreground size-3.5" />
              <span>Weekend & On-Call Coverage</span>
            </div>
            <p className="text-foreground/85 font-mono text-[11px]">Full-day Sat & Sun Available</p>
            <p className="text-muted-foreground mt-1.5 leading-relaxed">
              Available for scheduled production deployments, IoT firmware migrations, and on-call
              system incident response.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
