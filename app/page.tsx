'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Twitter, Linkedin, Mail, ExternalLink, User, Code, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const personalInfo = {
    name: "Aryan Nagbanshi",
    title: "Senior Software Engineer",
    bio: "Building SaaS products and web apps.",
    email: "aryan@example.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com"
  };

  const profileImage = "https://github.com/shadcn.png";

  const projects = [
    {
      title: "Project Alpha",
      description: "A modern e-commerce platform built with Next.js and Stripe integration.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      link: "https://project-alpha.com",
      github: "https://github.com/project-alpha"
    },
    {
      title: "Beta Dashboard",
      description: "Analytics dashboard with real-time data visualization and reporting.",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "https://beta-dashboard.com",
      github: "https://github.com/beta-dashboard"
    },
    {
      title: "Gamma Chat",
      description: "Real-time chat application with end-to-end encryption.",
      tech: ["Socket.io", "Express", "MongoDB", "React"],
      link: "https://gamma-chat.com",
      github: "https://github.com/gamma-chat"
    }
  ];

  const navItems = [
    { name: 'About', icon: User },
    { name: 'Projects', icon: Code },
    { name: 'Work', icon: Folder }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#FFFFFF]/70 backdrop-blur-lg z-50 py-4 border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              className="text-xl font-bold text-black cursor-pointer"
            >
              {personalInfo.name}
            </motion.div>
            <div className="flex gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors px-2"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#FFFFFF]">
        <div className="max-w-2xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-4 right-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-100 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <img
                src={profileImage}
                alt="Aryan Nagbanshi"
                className="relative w-32 h-32 rounded-xl object-cover shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-1"
            >
              <h1 className="text-5xl font-bold text-black tracking-tight">
                {personalInfo.name}
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "4rem" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-1 bg-gray-100 rounded-full mt-2"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center flex-wrap gap-2 text-lg"
            >
              <span className="text-gray-600">Building</span>
              {['Project One', 'Project Two'].map((project, index) => (
                <motion.span
                  key={project}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-gray-100 rounded-lg font-medium text-gray-800 hover:bg-gray-200 transition-colors duration-200 cursor-default"
                >
                  {project}
                </motion.span>
              ))}
              <span className="text-gray-600">other cool things</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 text-lg"
            >
              <p className="text-gray-600 leading-relaxed">
                Senior Software Engineer building SaaS products and web apps.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Find me on <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-black font-medium hover:underline decoration-gray-400 underline-offset-4 transition-colors duration-200"
                >
                  twitter
                </motion.a> for tech updates and memes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-2"
            >
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 + (index * 0.1) }}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative py-16 flex items-center justify-center"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "33.333333%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 h-[1px] bg-gradient-to-r from-transparent to-gray-200"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-100"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-xl"
            >
              ✦
            </motion.span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "33.333333%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute right-0 h-[1px] bg-gradient-to-l from-transparent to-gray-200"
          />
        </motion.div>
      </div>

      {/* Projects Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-black">Featured Projects</h2>
            <p className="text-gray-600 mb-12 text-lg">Some of my recent work and experiments</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group bg-[#FFFFFF] border border-gray-100 hover:border-black transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-sm bg-gray-50 rounded-full text-gray-600"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.github}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.link}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-[#FFFFFF]">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-gray-600">
              © 2024 {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
