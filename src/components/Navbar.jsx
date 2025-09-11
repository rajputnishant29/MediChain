import { Link, useLocation } from "react-router-dom";
import { Home, Info, Phone, HelpCircle } from "lucide-react";

function Navbar() {
  const location = useLocation();

  // Function to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#121a2b] p-4 flex justify-between items-center shadow-md border-b-2 border-orange-500">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent"
      >
        MediChain
      </Link>

      {/* Links with icons */}
      <div className="space-x-8 font-medium flex items-center">
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
    </nav>
  );
}

export default Navbar;
