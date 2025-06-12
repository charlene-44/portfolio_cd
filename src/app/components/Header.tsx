"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logoSection" onClick={closeMenu}>
          <Image
            src="./assets/logo.svg"
            alt="Logo Charlène Duret"
            title="Logo Charlène Duret"
            width={150}
            height={100}
          />
        </Link>

        {/* Menu hamburger pour mobile */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <Link
            href="/projets"
            className={pathname === "/projets" ? "link active" : "link"}
            onClick={closeMenu}
          >
            Projets
          </Link>
          
          <Link
            href="/cv"
            className={pathname === "/cv" ? "link active" : "link"}
            onClick={closeMenu}
          >
            CV
          </Link>
          
          <Link
            href="/contact"
            className={pathname === "/contact" ? "link active" : "link"}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {/* Overlay pour fermer le menu sur mobile */}
        {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
      </div>
    </header>
  );
};

export default Header;