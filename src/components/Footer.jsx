function Footer() {
  return (
    <footer className="bg-[#121a2b] py-6 text-center relative border-t-2 border-green-500">
      {/* Decorative Tricolor Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-white to-green-500"></div>

      {/* Footer Content */}
      <p className="text-gray-300 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
          MediChain
        </span>
        . All Rights Reserved.
      </p>

      {/* Extra Small Links */}
      <div className="flex justify-center gap-6 mt-3 text-xs text-gray-400">
        <a href="/privacy" className="hover:text-orange-400 transition duration-300">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-green-400 transition duration-300">
          Terms of Service
        </a>
        <a href="/contact" className="hover:text-yellow-300 transition duration-300">
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
