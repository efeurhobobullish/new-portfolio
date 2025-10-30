"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Code2, Palette, Smartphone, Zap, Users, TrendingUp } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building responsive, high-performance websites with React, Next.js, and modern web technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive user interfaces and experiences that engage and delight users.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Ensuring your website looks perfect on all devices with mobile-first design approach.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing websites for speed, SEO, and user experience to maximize conversions.",
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Providing expert advice on web technologies, design trends, and best practices.",
  },
  {
    icon: TrendingUp,
    title: "Brand Strategy",
    description: "Developing cohesive visual identities and brand strategies that resonate with your audience.",
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              Services &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Expertise</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions for your digital needs, combining development and design excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/70">{service.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
