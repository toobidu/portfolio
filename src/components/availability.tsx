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
    <section id="availability" className="border-border/40 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center gap-2">
        <Globe className="text-muted-foreground size-4" />
        <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
          Remote Availability & Timezone Overlap
        </h2>
      </div>

      <div className="border-border/60 bg-card/30 space-y-4 rounded-lg border p-5">
        <div className="border-border/40 flex flex-col justify-between gap-4 border-b pb-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-foreground text-sm font-semibold">
                {personalInfo.availability.status}
              </span>
            </div>
            <p className="text-muted-foreground mt-1 text-xs">
              Target: {personalInfo.availability.targetRegion}
            </p>
          </div>

          {/* Live Clocks */}
          <div className="flex items-center gap-6 font-mono text-xs">
            <div>
              <div className="text-muted-foreground">Hanoi (ICT / UTC+7)</div>
              <div className="text-foreground text-sm font-bold">
                {timeState.hanoi || '--:--:--'}
              </div>
            </div>
            <div className="border-border/60 border-l pl-6">
              <div className="text-muted-foreground">Berlin / Paris (CET)</div>
              <div className="text-foreground text-sm font-bold">{timeState.cet || '--:--:--'}</div>
            </div>
          </div>
        </div>

        {/* Schedule info */}
        <div className="grid grid-cols-1 gap-3 text-xs sm:grid-cols-2">
          <div className="border-border/40 bg-muted/20 rounded-md border p-3">
            <div className="text-foreground mb-1 flex items-center gap-1.5 font-medium">
              <Clock className="text-muted-foreground size-3.5" />
              <span>Weekday Working Window</span>
            </div>
            <p className="text-muted-foreground">{personalInfo.availability.schedule}</p>
            <p className="text-muted-foreground/80 mt-1">
              Overlaps ~5 hours with European standard business day
            </p>
          </div>

          <div className="border-border/40 bg-muted/20 rounded-md border p-3">
            <div className="text-foreground mb-1 flex items-center gap-1.5 font-medium">
              <Clock className="text-muted-foreground size-3.5" />
              <span>Weekend Flexibility</span>
            </div>
            <p className="text-muted-foreground">Full-day availability Saturday & Sunday</p>
            <p className="text-muted-foreground/80 mt-1">
              Available for deployments, on-call maintenance, and sprint syncs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
