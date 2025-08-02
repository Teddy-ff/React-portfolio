import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-20 flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl text-center text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="mb-4">
          Hello! I'm <span className="font-semibold text-blue-500">Idrees M</span>,
          a final-year B.Tech CSBS student with a strong interest in building
          creative and functional web applications. I specialize in
          <span className="font-medium text-green-500"> Django</span>,
          <span className="font-medium text-yellow-500"> Python</span>, and
          <span className="font-medium text-purple-500"> SQL</span>.
        </p>

        <p className="mb-4">
          I have completed internships where I built full-stack websites using Django,
          participated in live project deployment, and gained practical experience
          with modern web tools. I'm currently improving my frontend skills with
          React, Tailwind CSS, and animation libraries.
        </p>

        <p>
          I'm open to internship opportunities and collaborations in web development,
          especially full-stack roles where I can continue learning and contributing.
        </p>
      </motion.div>
    </section>
  );
}
