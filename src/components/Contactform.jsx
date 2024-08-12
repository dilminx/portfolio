import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validate();
    if (Object.keys(validateErrors).length > 0) {
      setError(validateErrors);
    } else {
      setError({});
      setIsSending(true);

      emailjs.send(
        "service_mklnxzo","template_jdzpeta", //EmailJS Service ID and template ID
        formData,
        '9W4HPBZdEWHbYzUn-' //EmailJS user ID
      )
      .then((response) => {
        console.log("Success:", response);
        toast.success("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Failed to send message");
      })
      .finally(() => {
        setIsSending(false);
      });
    }
  };

  return (
    <div className='max-w-3xl p-4 mx-auto ' id='contactform'>
      <Toaster />
      <h2 className='my-8 text-4xl tracking-tighter text-center'>Let's Connect</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-3 py-2 mb-8 bg-transparent border border-gray-900 rounded-lg focus:border-gray-400"
          
          />
          {error.name && (
            <p className='text-sm text-pink-700'>{error.name}</p>
          )}
        </div>
        <div className='mb-4'>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-3 py-2 mb-8 bg-transparent border border-gray-900 rounded-lg focus:border-gray-400"
          />
          {error.email && (
            <p className='text-sm text-pink-700'>{error.email}</p>
          )}
        </div>
        <div className='mb-4'>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            rows="4"
            className="w-full px-3 py-2 mb-8 bg-transparent border border-gray-900 rounded-lg focus:border-gray-400"
          />
          {error.message && (
            <p className='text-sm text-pink-700'>{error.message}</p>
          )}
        </div>
        <button
          type='submit'
          className='px-4 py-2 mb-8 text-black bg-yellow-600 hover:bg-yellow-300 lg:w-96 lg:mx-40'
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contactform;
