import React from "react";
import gsap from "gsap";

// Déclaration d'une timeline générale
const tl = gsap.timeline();

// Animation du préchargeur
export const preLoaderAnim = (): void => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.inOut",
  })
    .to(".landing", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "90vh" },
    })
    .to(".text-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".text-container span", {
      duration: 1.5,
      delay: 1,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".text-container span", {
      duration: 1,
      y: 70,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
     // Suppression du préchargeur à la fin
    .to(".preloader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
      onComplete: () => {
        console.log("Préchargeur terminé !");
      },
    });

  // Ajout de l'appel aux animations pour éviter l'erreur
  animateShapes();
  animateMainShape();
};

// Ouverture du menu
export const openMenu = (): void => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.out",
  })
    .to(".hamburger-menu", {
      duration: 0.1,
      css: { display: "block" },
    })
    .to(".header-item", {
      duration: 0.1,
      css: { background: "none" },
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: 0.3,
      css: { fill: "#ffffff" },
    })
    .to([".nav-secondary", ".nav-primary"], {
      duration: 0.8,
      height: "100%",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1,
      },
      ease: "power3.inOut",
    })
    .from(".nav-link", {
      duration: 0.5,
      x: -80,
      opacity: 0,
      stagger: {
        amount: 0.5,
      },
      ease: "Power3.in",
    });
};

// Fermeture du menu
export const closeMenu = (): void => {
  const tl = gsap.timeline();
  tl.to("body", {
    duration: 0.05,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
    .to([".nav-primary", ".nav-secondary"], {
      duration: 0.8,
      height: "0",
      transformOrigin: "right top",
      stagger: {
        amount: 0.1,
      },
      ease: "power3.inOut",
    })
    .to(".cls-1", {
      duration: 0.1,
      delay: -0.3,
      css: { fill: "#08e7f3" },
    })
    .to(".header-item", {
      duration: 0.5,
      css: { background: "rgba(11,11,15,.8)" },
    })
    .to(".hamburger-menu", {
      duration: 0.05,
      css: { display: "none" },
    });
};

// Animations récurrentes
export const fadeUp = (el: string, delay: number = 0): void => {
  tl.from(el, {
    y: 150,
    duration: 1,
    delay,
    opacity: 0,
    ease: "power3.Out",
  });
};

export const mobileLanding = (): void => {
  if (window.innerWidth < 763) {
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
  }
};

// Correction : Export des fonctions pour éviter l'erreur
export const animateShapes = (): void => {
  const infiniteTl = gsap.timeline({ repeat: -1 });
  infiniteTl
    .to(".shapes .shape", {
      duration: 4,
      rotate: 360,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 2,
    })
    .to(".shapes .shape-3", {
      duration: 1,
      rotate: 360,
      delay: -2,
      ease: "power3.easeInOut",
    })
    .to(".shapes .shape", {
      duration: 3,
      rotate: 0,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1,
      opacity: 0,
      delay: -1,
      ease: "power3.easeInOut",
      stagger: 1,
    })
    .to(".shapes .shape", {
      duration: 1.5,
      opacity: 1,
      ease: "power3.easeInOut",
      stagger: 1,
    });
};

export const animateMainShape = (): void => {
  const infiniteTl = gsap.timeline({ repeat: -1 });
  infiniteTl
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: -50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 6,
      x: -30,
      y: 50,
      ease: "expo.easeOut",
    })
    .to(".shapes .main-circle", {
      duration: 4,
      x: 0,
      y: 0,
      ease: "expo.easeOut",
    });
};

// Animation au survol
export const boxHover = (e: React.MouseEvent<HTMLDivElement>): void => {
  const tl = gsap.timeline();
  if (window.innerWidth >= 986) {
    tl.to(e.currentTarget.querySelector(".link"), {
      duration: 0,
      opacity: 1,
    }).from(e.currentTarget.querySelectorAll(".box-anim"), {
      duration: 0.3,
      opacity: 0,
      y: 30,
      stagger: 0.1,
      ease: "Power3.easeOut",
    });
  }
};

export const boxExit = (e: React.MouseEvent<HTMLDivElement>): void => {
  if (window.innerWidth >= 986) {
    gsap.to(e.currentTarget.querySelector(".link"), {
      duration: 0,
      opacity: 0,
    });
  }
};

// Effets de fondu
export const fadeIn = (el: string): void => {
  gsap.to(el, {
    duration: 2,
    opacity: 1,
    y: -60,
    ease: "power4.out",
  });
};

export const fadeOut = (el: string): void => {
  gsap.to(el, {
    duration: 1,
    opacity: 0,
    y: -20,
    ease: "power4.out",
  });
};
