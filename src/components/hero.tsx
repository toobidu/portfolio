import { useState } from 'react'
import { Check, Copy, Download, Layers, Mail, Radio, Server } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import {
  DockerIcon,
  JavaIcon,
  KotlinIcon,
  MqttIcon,
  PostgresIcon,
  RabbitMqIcon,
  ReactIcon,
  RedisIcon,
  SpringBootIcon,
  SqlServerIcon,
  TypeScriptIcon,
  WebRtcIcon,
} from '@/components/tech-icons'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'

export function Hero() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const pillars = [
    {
      title: 'Backend & High Concurrency',
      icon: Server,
      desc: 'Thiết kế RESTful API & Microservices trên Java Spring Boot, tối ưu hàng đợi RabbitMQ, kiến trúc dynamic authorization và cache đa tầng với Redis.',
      techs: [
        { name: 'Java', icon: <JavaIcon className="size-3.5" /> },
        { name: 'Spring Boot', icon: <SpringBootIcon className="size-3.5" /> },
        { name: 'SQL Server', icon: <SqlServerIcon className="size-3.5" /> },
        { name: 'PostgreSQL', icon: <PostgresIcon className="size-3.5" /> },
        { name: 'Redis', icon: <RedisIcon className="size-3.5" /> },
      ],
    },
    {
      title: 'Real-time Streaming & IoT',
      icon: Radio,
      desc: 'Điều phối luồng telemetry 5.000+ thiết bị qua Mosquitto MQTT QoS 1, pipeline video camera ONVIF (RTSP → WebRTC 2-way talk & HLS DVR playback với FFmpeg).',
      techs: [
        { name: 'MQTT', icon: <MqttIcon className="size-3.5" /> },
        { name: 'RabbitMQ', icon: <RabbitMqIcon className="size-3.5" /> },
        { name: 'WebRTC', icon: <WebRtcIcon className="size-3.5" /> },
        { name: 'React', icon: <ReactIcon className="size-3.5" /> },
      ],
    },
    {
      title: 'Hardware & Linux Delivery',
      icon: Layers,
      desc: 'Tích hợp sâu SDK phần cứng, bóc tách trực tiếp bản tin GPS NMEA (Kotlin), đóng gói Docker và trực tiếp triển khai máy chủ Linux, domain/SSL thực tế cho khách hàng.',
      techs: [
        { name: 'Kotlin', icon: <KotlinIcon className="size-3.5" /> },
        { name: 'TypeScript', icon: <TypeScriptIcon className="size-3.5" /> },
        { name: 'Docker', icon: <DockerIcon className="size-3.5" /> },
      ],
    },
  ]

  return (
    <section id="hero" className="border-border/60 scroll-mt-20 border-b py-12 md:py-16">
      <div className="space-y-8">
        {/* Top Header & Bio + Profile Photo */}
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-4">
            <div className="border-border/80 bg-muted/40 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
              <span>{personalInfo.availability.status}</span>
              <span className="text-border">|</span>
              <span className="text-foreground/80">{personalInfo.availability.overlap}</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-foreground font-heading text-3xl font-bold tracking-tight sm:text-5xl">
                {personalInfo.name}
              </h1>
              <p className="text-muted-foreground text-lg font-medium sm:text-xl">
                {personalInfo.title}{' '}
                <span className="text-foreground/90 font-normal">
                  · {personalInfo.specialization}
                </span>
              </p>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              {personalInfo.summary}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a href={`mailto:${personalInfo.email}`}>
                <Button size="sm" className="gap-2 font-medium">
                  <Mail className="size-4" />
                  <span>Contact via Email</span>
                </Button>
              </a>

              <Button
                variant="outline"
                size="sm"
                onClick={copyEmail}
                className="gap-1.5 font-mono text-xs"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-500" />
                ) : (
                  <Copy className="size-3.5" />
                )}
                <span>{copied ? 'Copied' : personalInfo.email}</span>
              </Button>

              <a
                href={personalInfo.resumePdf}
                download="To_Tien_Dung_Fullstack_Software_Engineering.pdf"
              >
                <Button variant="outline" size="sm" className="gap-1.5 font-mono text-xs">
                  <Download className="size-3.5" />
                  <span>CV (PDF)</span>
                </Button>
              </a>

              <div className="flex items-center gap-1 pl-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted inline-flex size-8 items-center justify-center rounded-md border transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted inline-flex size-8 items-center justify-center rounded-md border transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo Avatar */}
          <div className="flex shrink-0 justify-start md:justify-end">
            <div className="border-border/80 from-border/80 relative size-32 rounded-2xl border bg-gradient-to-b to-transparent p-1 shadow-md sm:size-36 md:size-40">
              <img
                src="/me.jpg"
                alt={personalInfo.name}
                className="size-full rounded-xl object-cover"
              />
              <div className="border-border/80 bg-background/95 absolute -right-1 -bottom-2 flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] shadow-xs backdrop-blur-xs">
                <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-foreground/85 text-[10px] font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Highlights */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
          {personalInfo.metrics.map((metric) => (
            <div
              key={metric.label}
              className="border-border/70 bg-card/40 hover:border-border rounded-lg border p-4 transition-colors"
            >
              <div className="text-foreground font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {metric.value}
              </div>
              <div className="text-muted-foreground mt-0.5 font-mono text-xs font-semibold tracking-wider uppercase">
                {metric.label}
              </div>
              <p className="text-muted-foreground mt-2 text-xs leading-normal">{metric.detail}</p>
            </div>
          ))}
        </div>

        {/* Core Pillars Cards (Real, Grounded in Production) */}
        <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.title}
                className="border-border/70 bg-card/40 hover:border-border flex flex-col justify-between space-y-3 rounded-lg border p-4.5 transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-foreground flex items-center gap-2 text-sm font-semibold">
                    <span className="border-border/60 bg-muted/40 text-muted-foreground flex size-7 items-center justify-center rounded-md border">
                      <Icon className="size-4" />
                    </span>
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="border-border/40 flex flex-wrap gap-1.5 border-t pt-2">
                  {pillar.techs.map((t) => (
                    <span
                      key={t.name}
                      className="bg-muted/40 text-foreground/90 border-border/50 inline-flex items-center gap-1 rounded border px-2 py-0.5 font-mono text-[11px]"
                    >
                      {t.icon}
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
