import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, MessageCircle } from "lucide-react";

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

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "bsprabhas2002@gmail.com",
      link: "mailto:bsprabhas2002@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8317647595",
      link: "tel:+918317647595",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/bsuryaprabhas",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Check my projects",
      link: "https://github.com/Suryab02",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white text-gray-900 scroll-mt-2"
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
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you. Reach out via email, call, or connect on social media.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Quick Contact</h3>

            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 hover:bg-accent hover:bg-opacity-10 rounded-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-20 transition-all">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                      {method.label}
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-accent group-hover:text-opacity-70 transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-700 mb-3">
                Follow Me
              </p>
              <div className="flex gap-3">
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
                      className="w-10 h-10 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all"
                      title={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-accent bg-opacity-5 border border-accent border-opacity-20 rounded-2xl p-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-4">
                  Your message has been sent successfully. I'll get back to you
                  shortly!
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent hover:bg-opacity-90 transition-all"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 rounded-2xl shadow-lg space-y-6"
              >
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all placeholder-transparent"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-accent peer-focus:font-semibold transition-all pointer-events-none">
                      Your Name
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all placeholder-transparent"
                    />
                    <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-accent peer-focus:font-semibold transition-all pointer-events-none">
                      Your Email
                    </label>
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative group">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder=" "
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white transition-all resize-none placeholder-transparent"
                  />
                  <label className="absolute left-4 top-2 text-sm text-gray-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-accent peer-focus:font-semibold transition-all pointer-events-none">
                    Your Message
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="w-full bg-black text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

                {/* Character Count */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. We'll only use your information to respond to your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Prefer a quick call?{" "}
            <a
              href="tel:+918317647595"
              className="text-accent font-semibold hover:underline"
            >
              Schedule a meeting
            </a>
            {" "}or check out my{" "}
            <a
              href="https://github.com/Suryab02"
              className="text-accent font-semibold hover:underline"
            >
              latest projects
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}