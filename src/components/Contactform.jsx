import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

/// email web3form using

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
    setFormData({...formData, [name]: value,});
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
    <section className='py-20' id='contactform'>
      <div className="max-w-4xl px-4 mx-auto">
        <Toaster />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='my-12 text-4xl font-bold tracking-tighter text-center text-white uppercase md:text-5xl'
        >
          Let's Connect
        </motion.h2>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           viewport={{ once: true }}
           className="p-8 glass-card rounded-3xl"
        >
          <form onSubmit={handleSubmit}>
            <div className='mb-6'>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-slate-950/50 border border-slate-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
              />
              {error.name && (
                <p className='mt-1 text-sm text-rose-500'>{error.name}</p>
              )}
            </div>
            <div className='mb-6'>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full px-4 py-3 text-white bg-slate-950/50 border border-slate-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
              />
              {error.email && (
                <p className='mt-1 text-sm text-rose-500'>{error.email}</p>
              )}
            </div>
            <div className='mb-8'>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 text-white bg-slate-950/50 border border-slate-800 rounded-xl focus:border-indigo-500 focus:outline-none transition-all"
              />
              {error.message && (
                <p className='mt-1 text-sm text-rose-500'>{error.message}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              className='w-full px-8 py-4 font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contactform;
