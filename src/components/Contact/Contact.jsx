import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_dmbkcxc",
      "template_zegbums",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      "Yf-XOSYybCPQ-ETTN"
    )
    .then(() => {
      alert("Message sent successfully ✅");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    })
    .catch(() => {
      alert("Failed to send message ❌");
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 animate-fadeIn">
      
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-8 transition duration-500 hover:shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8 animate-slideUp">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact Me
          </h1>
          <p className="text-gray-500 mt-2">
            Let's build something amazing together ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6 text-left animate-slideLeft">

            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">Ahmedabad, Gujarat</p>
              </div>
            </div>

            <a href="mailto:ibjifaiyazz@gmail.com" className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">ibjifaiyazz@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919537653896" className="flex items-center gap-3">
              <FaPhone className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium">+91 9537653896</p>
              </div>
            </a>

            <div className="flex gap-6 mt-4">
              <a href="https://github.com/Faiyazi" target="_blank" rel="noreferrer">
                <FaGithub className="text-2xl hover:text-blue-500 transition hover:scale-110" />
              </a>

              <a href="https://www.linkedin.com/in/faiyaz-ibji" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-500 transition hover:scale-110" />
              </a>
            </div>

          </div>

          {/* Contact Form */}
          <form onSubmit={sendEmail} className="space-y-4 animate-slideRight">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;