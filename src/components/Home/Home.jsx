import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div className="space-y-6 animate-slideLeft">

          <h2 className="text-blue-600 font-semibold text-lg">
            Hello, I'm
          </h2>

          <h1 className="text-5xl font-bold text-gray-800">
            Faiyaz
          </h1>

          <h3 className="text-2xl text-gray-600">
            Odoo Developer & Frontend Developer
          </h3>

          <p className="text-gray-500">
            I build modern web applications using React, Odoo, and Python.
            Passionate about creating efficient and scalable business solutions.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Me
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              View Projects
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl pt-4">

            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub className="hover:text-blue-600 transition" />
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>

            <a href="mailto:yourmail@gmail.com">
              <FaEnvelope className="hover:text-blue-600 transition" />
            </a>

          </div>

        </div>


        {/* Right Section */}
        <div className="flex justify-center animate-slideRight">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-80 hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </div>
  );
}

export default Home;