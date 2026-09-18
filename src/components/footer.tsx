import { personalInfo } from '@/data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-muted-foreground py-8 text-xs">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div>
          © {currentYear} {personalInfo.englishName} ({personalInfo.name}).
        </div>
        <div className="font-mono text-[11px]">Hanoi, Vietnam · Remote Ready</div>
      </div>
    </footer>
  )
}
