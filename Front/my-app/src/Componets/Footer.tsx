"use client";
import { useState } from "react";
import { Mail, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

const Footer: React.FC = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        <div>
          <h2 className="text-xl text-white font-semibold mb-2 ">
            Tecnologías usadas
          </h2>
          <div>
            <div className="flex items-start space-x-4 mb-4">
              <button
                onClick={() => setShowFrontend(!showFrontend)}
                className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300 focus:outline-none"
              >
                <span>Frontend</span>
                {showFrontend ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {showFrontend && (
                <ul className="list-disc text-sm text-gray-300 pl-5">
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>SweetAlert2</li>
                  <li>Lucide React</li>
                </ul>
              )}
            </div>
            <div className="flex items-start space-x-4">
              <button
                onClick={() => setShowBackend(!showBackend)}
                className="flex items-center space-x-1 hover:text-amber-200 transition-colors duration-300 focus:outline-none"
              >
                <span>Backend</span>
                {showBackend ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {showBackend && (
                <ul className="list-disc text-sm text-gray-300 pl-5">
                  <li>Express</li>
                  <li>TypeScript</li>
                  <li>PostgreSQL</li>
                  <li>JWT</li>
                  <li>TypeORM</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl text-white font-semibold mb-2 ">Contacto</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center space-x-2 hover:text-amber-200 transition-colors duration-300">
              <Linkedin size={16} />
              <a
                href="https://www.linkedin.com/in/alexis-falces-95b892252/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexis Falces
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:text-amber-200 transition-colors duration-300">
              <Mail size={16} />
              <a href="mailto:alefalces@gmail.com">alefalces@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
