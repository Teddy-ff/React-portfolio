import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4">
      <motion.img
        src="/profile.jpeg" // ✅ Replace this with the correct image name in public folder
        alt="Idrees M"
        className="w-32 h-32 rounded-full border-4 border-white shadow-xl mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      />

      <motion.h1
        className="text-4xl font-bold text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Idrees M
      </motion.h1>

      <motion.h2
        className="text-lg text-gray-400 mt-2 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Final Year B.Tech CSBS | Django Web Developer
      </motion.h2>

      <motion.p
        className="mt-6 max-w-xl text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        I'm a passionate web developer skilled in Django, Python, HTML/CSS, and SQL.
        I love building real-world projects and exploring new opportunities.
      </motion.p>

      {/* 🚀 Buttons */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <a
          href="https://github.com/Teddy-ff"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-black px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/idrees-m-330925299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="/Idrees-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
        >
          Resume
        </a>
      </motion.div>
    </section>
  );
}
