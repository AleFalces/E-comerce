"use client";

import { useState } from "react";
import { Mail, Linkedin, ChevronDown, ChevronUp } from "lucide-react";

export const Footer = () => {
  const [showFrontend, setShowFrontend] = useState(false);
  const [showBackend, setShowBackend] = useState(false);

  return (
    <footer className="w-full bg-gray-900 text-white p-6 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Tecnologías */}
        <div>
          <h2 className="text-lg font-semibold mb-2">
            Tecnologías usadas en este proyecto
          </h2>

          {/* Frontend */}
          <div>
            <button
              className="flex items-center gap-2"
              onClick={() => setShowFrontend(!showFrontend)}
            >
              <span className="font-medium">Frontend</span>
              {showFrontend ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {showFrontend && (
              <ul className="ml-4 mt-1 list-disc text-sm text-gray-300">
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>SweetAlert2</li>
                <li>Lucide React</li>
              </ul>
            )}
          </div>

          {/* Backend */}
          <div className="mt-2">
            <button
              className="flex items-center gap-2"
              onClick={() => setShowBackend(!showBackend)}
            >
              <span className="font-medium">Backend</span>
              {showBackend ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </button>
            {showBackend && (
              <ul className="ml-4 mt-1 list-disc text-sm text-gray-300">
                <li>Express</li>
                <li>TypeScript</li>
                <li>PostgreSQL</li>
                <li>JWT</li>
                <li>TypeORM</li>
              </ul>
            )}
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contacto</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li className="flex items-center gap-2">
              <Linkedin size={16} />
              <a
                href="https://www.linkedin.com/in/alexis-falces-95b892252/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Alexis Falces
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:alefalces@gmail.com" className="hover:underline">
                alefalces@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
