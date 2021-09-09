import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../hooks/useDimensions";
import MenuToggle from "./header/MenuToggle";
import { Navigation } from "./header/Navigation";
import { useRef, useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 80) {
        setHandleShow(true);
      } else setHandleShow(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav
      className={`px-24 fixed bg-bgblue/60 backdrop-filter backdrop-blur-xl w-full top-0 z-50 md:flex justify-between items-center ${
        handleShow ? "shadow-2xl" : "md:py-3"
      }`}
    >
      <Image
        width={75}
        height={75}
        objectFit="contain"
        src="/logo.svg"
        alt="logo"
      />

      <motion.nav
        className="absolute left-0 w-full top-2 md:hidden"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <ol className="hidden space-x-8 md:flex">
        <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="text-neongreen">1. </span> About
          </Link>
        </li>
        <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="text-neongreen">2. </span>Work
          </Link>
        </li>
        <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
          <span className="text-neongreen">3. </span>Blog
        </li>
        <li className="border-b-2 border-transparent cursor-pointer text-text hover:border-neongreen">
          <span className="text-neongreen">4. </span>Contact
        </li>
      </ol>
    </nav>
  );
};

export default Header;
