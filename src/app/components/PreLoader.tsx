"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "../styles/preloader.css";
import { preLoaderAnim } from "@/app/animations/Index";

function Preloader() {
  const [showPreloader, setShowPreloader] = useState(true); // Commence par true

  useEffect(() => {
    const hasVisitedThisSession = sessionStorage.getItem('hasVisitedThisSession');

    if (hasVisitedThisSession) {
      // Si déjà visité, cacher le preloader immédiatement
      setShowPreloader(false);
    } else {
      // Première visite, marquer comme visité
      sessionStorage.setItem('hasVisitedThisSession', 'true');
    }
  }, []);

  // Animation après le rendu
  useLayoutEffect(() => {
    if (showPreloader) {
      preLoaderAnim();
    }
  }, [showPreloader]);

  if (!showPreloader) {
    return null;
  }

  return (
    <div className="preloader">
      <div className="preloader-container">
        <div className="text-container">
          <span className="text-item">Développeuse,</span>
          <span className="text-item">motivée,</span>
          <span className="text-item">{"en recherche d'une alternance."}</span>
        </div>
      </div>
    </div>
  );
}

export default Preloader;