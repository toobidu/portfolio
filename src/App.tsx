import { Availability } from '@/components/availability'
import { Contact } from '@/components/contact'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Projects } from '@/components/projects'
import { ScrollProgress } from '@/components/scroll-progress'
import { Skills } from '@/components/skills'
import { ThemeProvider } from '@/components/theme-provider'

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="bg-background text-foreground selection:bg-foreground selection:text-background min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main className="container mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-6xl">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Availability />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  )
}
