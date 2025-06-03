"use client";

import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "@/app/animations/Index"; // Vérifie la casse

function Preloader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="text-container">
        <span>Développeuse,</span>
        <span>motivée,</span>
        <span>en recherche d'une alternance.</span>
      </div>
    </div>
  );
}

export default Preloader;
