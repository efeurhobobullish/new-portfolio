"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <motion.div whileHover={{ x: -5 }} className="text-center md:text-left">
            <p className="text-foreground/70 text-sm font-medium">© {currentYear} Empire Tech. All rights reserved.</p>
            <p className="text-foreground/50 text-xs mt-1">Frontend Developer & Graphic Designer</p>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            {[
              { name: "GitHub", href: "#" },
              { name: "LinkedIn", href: "#" },
              { name: "Twitter", href: "#" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-foreground/70 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg transition-shadow duration-200 flex items-center gap-2"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
