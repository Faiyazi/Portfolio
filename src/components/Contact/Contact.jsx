import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [phone, setPhone] = useState("");

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

            {/* Location */}
            <div className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-medium">Ahmedabad, Gujarat</p>
              </div>
            </div>

            {/* Email */}
            <a 
              href="mailto:yourmail@gmail.com"
              className="flex items-center gap-3 hover:translate-x-2 transition duration-300"
            >
              <FaEnvelope className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Email</p>
                <p className="font-medium">ibjifaiyazz@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-3 hover:translate-x-2 transition duration-300"
            >
              <FaPhone className="text-blue-500 text-xl" />
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="font-medium">+91 9537653896</p>
              </div>
            </a>

            {/* Social */}
            <div className="flex gap-6 mt-4">

              <a 
                href="https://github.com/Faiyazi" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl cursor-pointer hover:text-blue-500 transition hover:scale-110" />
              </a>

              <a 
                href="https://www.linkedin.com/in/faiyaz-ibji" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-500 transition hover:scale-110" />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <form className="space-y-4 animate-slideRight">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Contact;