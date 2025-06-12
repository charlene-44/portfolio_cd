"use client";
import React from "react";
import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Charlène Duret. Tous droits réservés.</p>
        <div className="carbon-badge-wrapper">
          <WebsiteCarbonBadge dark={true} co2="0.12" percentage="89" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;