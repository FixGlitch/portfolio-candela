import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-white">
      <div className="container mx-auto flex items-center justify-between p-6">
        <h1 className="text-3xl font-bold font-sans text-gray-900 hover:text-red-500 transition duration-200">
          CANDELA ASTONE
        </h1>

        <button
          className="block md:hidden text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="/about-me"
            className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Sobre Mi
          </Link>
          <Link
            href="/contact"
            className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Contacto
          </Link>
          <Link
            href="/links"
            className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Links
          </Link>
        </nav>
        <a
          href="/gallery"
          className="hidden md:flex md:text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
        >
          GALERIA
        </a>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/about-me"
     className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
              onClick={toggleMenu}
            >
              Sobre Mi
            </Link>
            <Link
              href="/contact"
     className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Link
              href="/links"
     className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
              onClick={toggleMenu}
            >
              Links
            </Link>
            <a
              href="/gallery"
             className="text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
              onClick={toggleMenu}
            >
              GALERIA
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
