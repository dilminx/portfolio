import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

const Contactform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
    } else {
      setError({});
      setIsSending(true);

      const payload = {
        access_key: "29750e25-9a6d-4389-8c5a-96e02f70924d",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json();
        if (result.success) {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error(result.message || "Failed to send message");
        }
      } catch (error) {
        toast.error("Failed to send message");
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <section className='py-20 relative' id='contactform'>
      {/* Background accent */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-96 h-96 bg-blue-300 rounded-full filter blur-[200px] opacity-40"></div>

      <div className="max-w-4xl px-4 mx-auto relative z-10">
        <Toaster
          toastOptions={{
            style: {
              background: '#ffffff',
              color: '#0f172a',
              border: '1px solid rgba(37, 99, 235, 0.2)',
            }
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 my-12"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50"></div>
          <h2 className='text-4xl font-bold tracking-tighter text-center text-slate-900 uppercase md:text-5xl'>
            Let's Connect
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 mb-10 text-lg max-w-2xl mx-auto"
        >
          Have a project in mind or want to collaborate? Drop me a message and I'll get back to you shortly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="p-8 glass-card-glow rounded-3xl gradient-border shadow-sm"
        >
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="contact-name"
                value={formData.name}
                placeholder="John Doe"
                onChange={handleChange}
                className="w-full px-5 py-3.5 text-slate-800 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all input-glow placeholder-slate-400"
              />
              {error.name && (
                <p className='mt-1.5 text-sm text-rose-500 flex items-center gap-1'>
                  <span>⚠</span> {error.name}
                </p>
              )}
            </div>
            <div className='mb-6'>
              <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="contact-email"
                value={formData.email}
                placeholder="john@example.com"
                onChange={handleChange}
                className="w-full px-5 py-3.5 text-slate-800 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all input-glow placeholder-slate-400"
              />
              {error.email && (
                <p className='mt-1.5 text-sm text-rose-500 flex items-center gap-1'>
                  <span>⚠</span> {error.email}
                </p>
              )}
            </div>
            <div className='mb-8'>
              <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-500 uppercase tracking-widest mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                id="contact-message"
                value={formData.message}
                placeholder="Tell me about your project..."
                onChange={handleChange}
                rows="5"
                className="w-full px-5 py-3.5 text-slate-800 bg-white border border-slate-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all input-glow placeholder-slate-400 resize-none"
              />
              {error.message && (
                <p className='mt-1.5 text-sm text-rose-500 flex items-center gap-1'>
                  <span>⚠</span> {error.message}
                </p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              id="contact-submit"
              className='w-full px-8 py-4 font-bold text-white bg-gradient-to-r from-blue-600 to-sky-500 rounded-xl hover:from-blue-500 hover:to-sky-400 transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isSending}
            >
              {isSending ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message →'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactform;
