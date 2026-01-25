import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";
import Contact3D from "./Contact3D";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", form);
        setSubmitted(true);
        setLoading(false);
        setForm({ name: "", email: "", message: "" });
      }, 1500);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white scroll-mt-2 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out via email, call, or connect on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Globe - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            <div className="w-full h-[300px] lg:h-[400px] mb-8 relative">
              {/* Fallback/Background for Light Mode contrast */}
              <div className="absolute inset-0 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-[80px] -z-10"></div>
              <Contact3D />
            </div>

            {/* Social Links Row */}
            <div className="flex gap-4">
              {[
                {
                  icon: Github,
                  link: "https://github.com/Suryab02",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  link: "https://linkedin.com/in/yourprofile",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  link: "mailto:bsprabhas2002@gmail.com",
                  label: "Email",
                },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-full flex items-center justify-center text-gray-700 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-12 shadow-lg dark:shadow-none"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Your message has been sent successfully. I'll get back to you
                  shortly!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl shadow-xl dark:shadow-none space-y-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Send me a message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Describe your project or inquiry..."
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-600 text-gray-900 dark:text-white"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>


      </div>
    </section>
  );
}