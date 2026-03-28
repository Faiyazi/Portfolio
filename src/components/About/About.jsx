import { FaUser, FaCode, FaBriefcase } from "react-icons/fa";
import profileImg from "../image/image.png"

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      <div className="max-w-5xl w-full py-12">

        {/* Heading */}
        <div className="text-center mb-10 animate-slideUp">
          <h1 className="text-4xl font-bold text-gray-800">
            About Me
          </h1>
          <p className="text-gray-500 mt-2">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Side Image */}
          <div className="animate-slideLeft">
            <img
              src={profileImg}
              alt="profile"
              className="w-80 rounded-full hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Side Content */}
          <div className="space-y-6 animate-slideRight">

            <div className="flex gap-4">
              <FaUser className="text-3xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">Who I Am</h2>
                <p className="text-gray-600">
                  I'm Faiyaz, an Odoo Developer and Frontend Developer passionate
                  about building efficient business solutions and modern web apps.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaCode className="text-3xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">My Skills</h2>
                <p className="text-gray-600">
                  Odoo, Python, JavaScript, React, PostgreSQL, XML, Tailwind CSS
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaBriefcase className="text-3xl text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">Experience</h2>
                <p className="text-gray-600">
                  Working on Odoo customization, POS development, and full-stack
                  web applications.
                </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <a href="/Faiyaz_ibji.pdf" download>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
                  Download Resume
                </button>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;