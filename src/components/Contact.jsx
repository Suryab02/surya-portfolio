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
      className="py-28 bg-gradient-to-b from-gray-50 to-white text-black scroll-mt-20"
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
            className="text-center text-green-600 text-lg font-semibold"
          >
            🎉 Thank you! I’ll get back to you shortly.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-xl border border-gray-200 p-8 rounded-2xl shadow-xl space-y-6"
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
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent resize-none"
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    required
                    className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-transparent"
                  />
                )}
                <label
                  className="absolute left-4 top-2.5 text-sm text-gray-500 peer-focus:text-accent transition-all peer-focus:top-1 peer-focus:text-xs peer-valid:top-1 peer-valid:text-xs"
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
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
