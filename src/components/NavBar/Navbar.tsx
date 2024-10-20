import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 py-6 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold font-sans text-gray-900 hover:text-red-500 transition duration-200">
          CANDELA ASTONE
        </h1>
        <div className="flex space-x-8">
          <Link
            href="/about-me"
            className="md:text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Sobre Mi
          </Link>
          <Link
            href="/contact"
            className="md:text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Contacto
          </Link>
          <Link
            href="/links"
            className="md:text-black text-base font-bold font-sans hover:text-red-500 transition duration-200"
          >
            Links
          </Link>
        </div>
        <a
          href="/gallery"
          className="text-gray-700 font-bold font-sans hover:text-red-500 transition duration-200"
        >
          GALERIA
        </a>
      </div>
    </header>
  );
};

export default Navbar;
