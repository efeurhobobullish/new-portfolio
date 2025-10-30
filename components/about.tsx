"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I'm Empire Tech, a passionate frontend developer and graphic designer with a love for creating
                beautiful, intuitive digital experiences. With expertise in modern web technologies and design
                principles, I transform ideas into engaging, visually stunning interfaces.
              </p>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                My journey started with curiosity about how things work on the internet. Over the years, I've honed my
                skills in React, Next.js, UI/UX design, and various frontend technologies to build scalable, performant
                applications that look amazing.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                When I'm not coding or designing, you can find me exploring new design trends, contributing to
                open-source projects, or sharing knowledge with the developer and design communities.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden"
              >
                <img src="/professional-developer-designer-portrait.jpg" alt="Profile" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-2 border-primary/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 rounded-2xl border border-accent/10"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
