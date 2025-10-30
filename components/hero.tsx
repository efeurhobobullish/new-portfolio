"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Palette } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Empire Tech</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mb-8 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-foreground/80 font-medium">Frontend Developer</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
            <Palette className="w-5 h-5 text-accent" />
            <span className="text-foreground/80 font-medium">Graphic Designer</span>
          </div>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-foreground/70 mb-8 text-balance">
          Crafting beautiful, responsive web experiences and stunning visual designs with modern technologies
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary/5 transition-colors duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
