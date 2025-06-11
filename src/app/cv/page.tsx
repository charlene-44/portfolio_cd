"use client"
import React from 'react';
import data from '../data/data.json';
import '../cv/cv.css';

interface Experience {
  year: string;
  title: string;
  company: string;
  tasks: string[];
}

interface Formation {
  school: string;
  period: string;
  details: string[];
}

interface Techno {
  name: string;
  category: string;
}

interface Langue {
  langue: string;
  niveau: string;
}

const CV: React.FC = () => {
  // Extraction des données depuis le JSON
  const formations: Formation[] = data.formations;
  const experiences: Experience[] = data.experiences;
  const technos: Techno[] = data.technos;
  const savoirEtre: string[] = data.savoirEtre;
  const logiciels: string[] = data.logiciels;
  const langues: Langue[] = data.langues; // Ajout du typage ici

  // Filtrage des technologies par catégorie
  const frontEndTechs = technos.filter(tech => tech.category === 'frontend');
  const frameworks = technos.filter(tech => tech.category === 'framework');
  const backEndTechs = technos.filter(tech => tech.category === 'backend');

  return (
    <div className="cv-container">
      <div className="cv-content">
        <div className="cv-grid">
          
          {/* Colonne gauche - Formations & Langues */}
          <div className="cv-column">
            <section className="cv-section">
              <h2 className="cv-section-title">Formations</h2>
              <div className="cv-card">
                {formations.map((formation, index) => (
                  <div key={index} className="cv-formation-item">
                    <h3 className="cv-formation-school">{formation.school}</h3>
                    <p className="cv-formation-period">{formation.period}</p>
                    <ul className="cv-formation-details">
                      {formation.details.map((detail, idx) => (
                        <li key={idx} className="cv-list-item">
                          <span className="cv-bullet">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="cv-section">
              <h2 className="cv-section-title">Langues</h2>
              <div className="cv-card">
                {langues.map((langue, index) => (
                  <p key={index}>{langue.langue} - {langue.niveau}</p>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne milieu - Expériences */}
          <div className="cv-column">
            <section className="cv-section">
              <h2 className="cv-section-title">Expériences</h2>
              <div className="cv-experiences">
                {experiences.map((exp, index) => (
                  <div key={index} className="cv-experience-item">
                    <div className="cv-experience-year">
                      <span>{exp.year}</span>
                    </div>
                    <div className="cv-experience-content">
                      <h3 className="cv-experience-title">{exp.title}</h3>
                      <p className="cv-experience-company">{exp.company}</p>
                      <ul className="cv-experience-tasks">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Colonne droite - Compétences */}
          <div className="cv-column">
            <section className="cv-section">
              <h2 className="cv-section-title">Compétences</h2>
              <div className="cv-card cv-skills">
                
                {/* Grille pour organiser les compétences en 2 colonnes */}
                <div className="cv-skills-grid">
                  
                  {/* Première colonne - Technologies */}
                  <div className="cv-skills-column">
                    <div className="cv-skill-group">
                      <h3 className="cv-skill-title">FRONT-END</h3>
                      <ul className="cv-skill-list">
                        {frontEndTechs.map((tech, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{tech.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="cv-skill-group">
                      <h3 className="cv-skill-title">FRAMEWORKS</h3>
                      <ul className="cv-skill-list">
                        {frameworks.map((tech, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{tech.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="cv-skill-group">
                      <h3 className="cv-skill-title">BACK-END</h3>
                      <ul className="cv-skill-list">
                        {backEndTechs.map((tech, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{tech.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Deuxième colonne - Savoir-être et Logiciels */}
                  <div className="cv-skills-column">
                    <div className="cv-skill-group">
                      <h3 className="cv-skill-title">SAVOIR-ÊTRE</h3>
                      <ul className="cv-skill-list">
                        {savoirEtre.map((savoir, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{savoir}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="cv-skill-group">
                      <h3 className="cv-skill-title">LOGICIELS</h3>
                      <ul className="cv-skill-list">
                        {logiciels.map((logiciel, idx) => (
                          <li key={idx} className="cv-list-item">
                            <span className="cv-bullet">•</span>
                            <span>{logiciel}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Bouton de téléchargement */}
        {/* Bouton de téléchargement - Version lien direct */}
<div className="cv-download-section">
  <a 
    href="/assets/CV-CharleneDuret.pdf" 
    download="CV-CharleneDuret.pdf"
    className="cv-download-btn"
    style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
  >
    <svg className="cv-download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
    télécharger mon CV
  </a>
</div>
      </div>
    </div>
  );
};

export default CV;