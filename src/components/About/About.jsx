import { FaUser, FaCode, FaBriefcase } from "react-icons/fa";
import profileImg from "../image/image.png";
import "./About.css"

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-4 py-16">

      <div className="max-w-6xl w-full">

        {/* Heading */}
        <div className="text-center mb-16 animate-slideUp">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Me
          </h1>
          <p className="text-gray-500 mt-3 text-lg">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side Image */}
          <div className="flex justify-center animate-slideLeft">
            <div className="relative">
              
              {/* Glow Background */}
              <div className="absolute inset-0 bg-blue-400 blur-3xl opacity-20 rounded-full"></div>

              <img
                src={profileImg}
                alt="profile"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-xl animate-float hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="space-y-6 animate-slideRight">

            {/* Who I Am */}
            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <FaUser className="text-3xl text-blue-500 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Who I Am</h2>
                <p className="text-gray-600">
                  I'm Faiyaz, an Odoo Developer and Frontend Developer passionate
                  about building efficient business solutions and modern web apps.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <FaCode className="text-3xl text-blue-500 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">My Skills</h2>
                <p className="text-gray-600">
                  Odoo, Python, JavaScript, React, PostgreSQL, XML, Tailwind CSS
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="flex gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
              <FaBriefcase className="text-3xl text-blue-500 mt-1" />
              <div>
                <h2 className="text-xl font-semibold">Experience</h2>
                <p className="text-gray-600">
                  Working on Odoo customization, POS development, and full-stack
                  web applications.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="pt-4">
              <a
                href="/Faiyaz_ibji.pdf"
                download
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 shadow-md transition duration-300"
              >
                Download Resume
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;