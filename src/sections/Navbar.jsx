import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link text-white" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link text-white" href="#contact">
          Contact
        </a>
      </li>
      <li className="nav-li">
        <a
          href="/assets/resume/Zain_Ali_Resume.pdf"
          download="Zain_Ali_Resume.pdf"
          className="nav-link text-white inline-flex items-center justify-center gap-2 mx-auto"
          aria-label="Download resume"
        >
          <span className="text-white">Resume</span>
          <img src="/assets/logos/download.png" alt="" className="w-6 h-6" />
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 py-3">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-white hover:text-white"
          >
            ZAIN
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-white hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
