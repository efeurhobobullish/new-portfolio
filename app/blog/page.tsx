"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js 14",
    excerpt:
      "Explore the latest features of Next.js 14 and how to leverage them for better performance and developer experience.",
    date: "Dec 15, 2024",
    category: "Development",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Art of UI/UX Design in 2024",
    excerpt:
      "Discover the latest trends in user interface and experience design that are shaping the digital landscape.",
    date: "Dec 10, 2024",
    category: "Design",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Mastering TailwindCSS for Rapid Development",
    excerpt: "Learn how to use TailwindCSS effectively to build beautiful, responsive interfaces faster than ever.",
    date: "Dec 5, 2024",
    category: "Development",
    readTime: "7 min read",
  },
  {
    id: 4,
    title: "Creating Engaging Animations with Framer Motion",
    excerpt: "Master the art of smooth, performant animations that enhance user experience and engagement.",
    date: "Nov 28, 2024",
    category: "Development",
    readTime: "9 min read",
  },
  {
    id: 5,
    title: "Brand Identity: From Concept to Implementation",
    excerpt: "A comprehensive guide to developing a strong brand identity that resonates with your target audience.",
    date: "Nov 20, 2024",
    category: "Design",
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "Web Performance Optimization Strategies",
    excerpt: "Essential techniques to optimize your website for speed, SEO, and better user experience.",
    date: "Nov 15, 2024",
    category: "Development",
    readTime: "8 min read",
  },
]

export default function Blog() {
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
              Latest{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Articles</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Insights, tips, and stories about web development, design, and digital innovation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-8 rounded-xl bg-muted/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-foreground/50 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-foreground/70 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-foreground/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <motion.div whileHover={{ x: 5 }} className="text-primary font-semibold flex items-center gap-2">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
