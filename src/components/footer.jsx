import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Idrees M. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/Teddy-ff" // replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/idrees-m-330925299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" // replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:idrees4studies@gmail.com" // replace with your email
            className="text-white hover:text-indigo-400 text-xl"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
