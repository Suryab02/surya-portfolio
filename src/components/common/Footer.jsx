import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="w-full py-12 px-4 border-t border-slate-100 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-sm text-slate-500 font-medium">
                    © {new Date().getFullYear()} Surya Prabhas Bandaru. Built with React & Tailwind.
                </div>

                <div className="flex items-center gap-6">
                    <motion.a
                        href="https://github.com/Suryab02"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub size={20} />
                    </motion.a>

                    <motion.a
                        href="https://linkedin.com/in/bsuryaprabhas"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -2 }}
                        className="text-slate-400 hover:text-[#0A66C2] transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={20} />
                    </motion.a>

                    <motion.a
                        href="mailto:bsprabhas2002@gmail.com"
                        whileHover={{ y: -2 }}
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                        aria-label="Email"
                    >
                        <HiMail size={22} />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}
