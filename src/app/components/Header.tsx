"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "../styles/header.css";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logoSection">
          <Image
            src="./assets/logo.svg"
            alt="Logo Charlène Duret"
            width={150}
            height={100}
          />
          
        </Link>
        <nav className="nav">
          <Link
            href="/projets"
            className={pathname === "/projets" ? "link active" : "link"}
          >
            Projets
          </Link>

          <Link
            href="/cv"
            className={pathname === "/cv" ? "link active" : "link"}
          >
            CV
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? "link active" : "link"}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
