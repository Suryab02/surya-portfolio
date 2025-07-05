import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      console.log("Form submitted:", form);
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-gray-50 to-white text-black scroll-mt-32"
    >
      <div className="max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-accent mb-10"
        >
          Get in Touch
        </motion.h2>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-green-600 text-xl font-semibold"
          >
            🎉 Thank you! I’ll get back to you shortly.
            <p className="mt-3 text-gray-600 text-sm">
              Or email me directly at{" "}
              <a
                href="mailto:bsprabhas2002@gmail.com"
                className="text-accent underline hover:text-black"
              >
                bsprabhas2002@gmail.com
              </a>
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-xl border border-gray-200 p-8 rounded-3xl shadow-2xl space-y-6"
          >
            {["name", "email", "message"].map((field) => (
              <div key={field} className="relative">
                {field === "message" ? (
                  <textarea
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-transparent resize-none placeholder-transparent"
                    placeholder="Your message..."
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-transparent placeholder-transparent"
                    placeholder={field === "email" ? "Your email" : "Your name"}
                  />
                )}
                <label
                  className="absolute left-4 top-2.5 text-sm text-gray-500 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-accent transition-all"
                >
                  {field === "name"
                    ? "Your Name"
                    : field === "email"
                    ? "Your Email"
                    : "Your Message"}
                </label>
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              ✉️ Send Message
            </button>

            <p className="text-center text-sm text-gray-600">
              Or email me directly at{" "}
              <a
                href="mailto:bsprabhas2002@gmail.com"
                className="text-accent font-medium underline hover:text-black"
              >
                bsprabhas2002@gmail.com
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}
