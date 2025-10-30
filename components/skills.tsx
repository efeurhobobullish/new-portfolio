"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si"

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const devSkills = [
    { name: "React", level: 95, icon: SiReact, color: "text-blue-400" },
    { name: "Next.js", level: 90, icon: SiNextdotjs, color: "text-foreground" },
    { name: "JavaScript", level: 92, icon: SiJavascript, color: "text-yellow-400" },
    { name: "TailwindCSS", level: 88, icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", level: 95, icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", level: 90, icon: SiCss3, color: "text-blue-500" },
  ]

  const designSkills = [
    { name: "Figma", level: 92, icon: SiFigma, color: "text-purple-400" },
    { name: "Adobe XD", level: 88, icon: SiAdobephotoshop, color: "text-red-500" },
    { name: "UI Design", level: 94, icon: SiFigma, color: "text-pink-400" },
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

  const SkillCard = ({ skill }: { skill: (typeof devSkills)[0] }) => {
    const Icon = skill.icon
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -5 }}
        className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
            <Icon className={`w-8 h-8 ${skill.color}`} />
          </motion.div>
          <h3 className="text-xl font-semibold">{skill.name}</h3>
        </div>

        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </div>

        <p className="text-sm text-foreground/60 mt-2">{skill.level}% Proficiency</p>
      </motion.div>
    )
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            My <span className="text-primary">Skills</span>
          </motion.h2>

          {/* Development Skills */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground/80">Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Design Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6 text-foreground/80">Design</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designSkills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
