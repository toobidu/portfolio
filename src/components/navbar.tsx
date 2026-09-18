import { useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Availability', href: '#availability' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="border-border/40 bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:max-w-6xl">
        <a href="#" className="group flex items-center gap-2">
          <span className="bg-foreground text-background flex size-7 items-center justify-center rounded-md font-mono text-xs font-bold transition-transform group-hover:scale-105">
            TD
          </span>
          <span className="text-foreground text-sm font-medium tracking-tight">
            {personalInfo.englishName}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href={personalInfo.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button variant="outline" size="sm" className="h-8 gap-1.5 font-mono text-xs">
              <FileText className="size-3.5" />
              <span>CV.pdf</span>
            </Button>
          </a>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="size-8 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-border bg-background border-b px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-2.5 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:text-foreground py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pt-2"
            >
              <Button variant="outline" size="sm" className="w-full gap-1.5 font-mono text-xs">
                <FileText className="size-3.5" />
                <span>Download CV (PDF)</span>
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
