import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#121a2b] p-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-blue-400">MediChain</Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/patient" className="hover:text-blue-400">Patient</Link>
        <Link to="/doctor" className="hover:text-blue-400">Doctor</Link>
      </div>
    </nav>
  );
}

export default Navbar;
