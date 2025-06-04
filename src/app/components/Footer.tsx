// src/app/components/Footer.tsx
import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Charlène Duret. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
