import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import projectsData from '@/lib/data/projects.json'

export default function Home() {
  const featuredProjects = projectsData.featured

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="SG Apps logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">SG Apps</h1>
              <p className="text-sm text-muted-foreground mt-1">Development & Design</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-semibold mb-6 text-balance">
            Building secure, modern applications with attention to detail
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We create thoughtfully designed web and mobile applications that prioritize security, 
            user experience, and performance. Every project is built with modern technologies and 
            undergoes rigorous testing to ensure reliability.
          </p>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
              Featured Projects
            </h3>
            <div className="h-px bg-border" />
          </div>

          <div className="space-y-24">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-12 items-center">
                {/* Project Image */}
                <div className={index % 2 === 0 ? "order-2 md:order-1" : "order-2 md:order-2"}>
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-border bg-muted">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={index % 2 === 0 ? "order-1 md:order-2" : "order-1 md:order-1"}>
                  <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Visit Live Site
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Founded by <Link href="https://sancho1952007.github.io/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Sancho Godinho</Link>
          </p>
        </footer>
      </main>
    </div>
  )
}
