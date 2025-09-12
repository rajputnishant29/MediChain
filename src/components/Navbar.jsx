import { Link, useLocation } from "react-router-dom";
import { Home, Info, Phone, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#121a2b] p-4 flex justify-between items-center shadow-md border-b-2 border-orange-500 relative">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent"
      >
        MediChain
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 font-medium items-center">
        <Link
          to="/"
          className={`flex items-center gap-2 transition duration-300 ${
            isActive("/") ? "text-orange-400" : "text-gray-200 hover:text-orange-400"
          }`}
        >
          <Home className="w-5 h-5" />
          Home
        </Link>

        <Link
          to="/about"
          className={`flex items-center gap-2 transition duration-300 ${
            isActive("/about") ? "text-white" : "text-gray-200 hover:text-white"
          }`}
        >
          <Info className="w-5 h-5" />
          About
        </Link>

        <Link
          to="/contact"
          className={`flex items-center gap-2 transition duration-300 ${
            isActive("/contact") ? "text-green-400" : "text-gray-200 hover:text-green-400"
          }`}
        >
          <Phone className="w-5 h-5" />
          Contact
        </Link>

        <Link
          to="/help"
          className={`flex items-center gap-2 transition duration-300 ${
            isActive("/help") ? "text-yellow-300" : "text-gray-200 hover:text-yellow-300"
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          Help
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-gray-200 focus:outline-none"
      >
        {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-full bg-[#121a2b] flex flex-col space-y-4 p-4 md:hidden border-t border-gray-700 z-20">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 transition duration-300 ${
              isActive("/") ? "text-orange-400" : "text-gray-200 hover:text-orange-400"
            }`}
          >
            <Home className="w-5 h-5" />
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 transition duration-300 ${
              isActive("/about") ? "text-white" : "text-gray-200 hover:text-white"
            }`}
          >
            <Info className="w-5 h-5" />
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 transition duration-300 ${
              isActive("/contact") ? "text-green-400" : "text-gray-200 hover:text-green-400"
            }`}
          >
            <Phone className="w-5 h-5" />
            Contact
          </Link>

          <Link
            to="/help"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 transition duration-300 ${
              isActive("/help") ? "text-yellow-300" : "text-gray-200 hover:text-yellow-300"
            }`}
          >
            <HelpCircle className="w-5 h-5" />
            Help
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
