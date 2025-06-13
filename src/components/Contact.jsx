import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      console.log("Form submitted:", form);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        {submitted ? (
          <p className="text-green-600">Thank you! I'll get back to you soon.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6 max-w-xl"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="border px-4 py-2 rounded"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Your Email"
              className="border px-4 py-2 rounded"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="border px-4 py-2 rounded min-h-[120px]"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
