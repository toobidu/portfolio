import { useState } from 'react'
import { Check, Copy, Download, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon, TelegramIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="border-border/40 scroll-mt-16 border-b py-12">
      <div className="mb-8 flex items-center gap-2">
        <Mail className="text-muted-foreground size-4" />
        <h2 className="font-heading text-foreground text-xl font-bold tracking-tight">
          Get In Touch
        </h2>
      </div>

      <div className="border-border/75 bg-card/50 hover:border-foreground/20 group relative space-y-6 overflow-hidden rounded-lg border p-6 transition-all duration-200">
        {/* Subtle top edge highlight */}
        <div className="from-foreground/15 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r to-transparent" />
        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
          I am actively seeking remote fullstack / backend engineering opportunities with European
          and global teams. Feel free to reach out directly via email, Telegram, or connect with me
          on LinkedIn.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a href={`mailto:${personalInfo.email}`}>
            <Button size="sm" className="gap-2 font-medium">
              <Mail className="size-4" />
              <span>Send an Email</span>
            </Button>
          </a>

          <Button
            variant="outline"
            size="sm"
            onClick={copyEmail}
            className="gap-2 font-mono text-xs"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-500" />
            ) : (
              <Copy className="size-3.5" />
            )}
            <span>{copied ? 'Copied' : personalInfo.email}</span>
          </Button>

          <a href={personalInfo.telegram} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
              <TelegramIcon className="size-3.5" />
              <span>@{personalInfo.telegramUsername}</span>
            </Button>
          </a>

          <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
            <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
              <Phone className="size-3.5" />
              <span>{personalInfo.phone}</span>
            </Button>
          </a>

          <a href={personalInfo.resumePdf} download="To_Tien_Dung_FullStack_Software_Engineer.pdf">
            <Button variant="outline" size="sm" className="gap-2 font-mono text-xs">
              <Download className="size-3.5" />
              <span>Download CV</span>
            </Button>
          </a>
        </div>

        <div className="border-border/40 text-muted-foreground flex flex-wrap items-center gap-4 border-t pt-2 text-xs">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="size-3.5" />
            <span>github.com/{personalInfo.githubUsername}</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <LinkedinIcon className="size-3.5" />
            <span>linkedin.com/in/{personalInfo.linkedinUsername}</span>
          </a>

          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
          >
            <TelegramIcon className="size-3.5" />
            <span>t.me/{personalInfo.telegramUsername}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
