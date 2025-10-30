"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Github, ExternalLink, Sparkles } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product filtering, cart management, and secure checkout.",
      tech: ["React", "Next.js", "TailwindCSS", "Stripe"],
      github: "#",
      live: "#",
      image: "/ecommerce-dashboard.jpg",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "Firebase", "TailwindCSS", "TypeScript"],
      github: "#",
      live: "#",
      image: "/task-management-app.jpg",
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with real-time data, forecasts, and location-based services.",
      tech: ["Next.js", "API Integration", "TailwindCSS", "Geolocation"],
      github: "#",
      live: "#",
      image: "/weather-dashboard.jpg",
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations.",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      github: "#",
      live: "#",
      image: "/portfolio-website.jpg",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media metrics with interactive charts and real-time data.",
      tech: ["React", "Chart.js", "TailwindCSS", "API"],
      github: "#",
      live: "#",
      image: "/social-media-analytics.jpg",
    },
    {
      title: "Blog Platform",
      description: "Content management system for blogging with markdown support and SEO optimization.",
      tech: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
      github: "#",
      live: "#",
      image: "/blog-platform.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-primary">Projects</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center"
                  >
                    <Sparkles className="w-8 h-8 text-accent" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-lg transition-shadow duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
