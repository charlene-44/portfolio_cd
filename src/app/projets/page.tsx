"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import { ExternalLink, Eye } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import data from '../data/data.json';
import '../projets/projets.css';

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'wordpress', label: 'Wordpress' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? data.projects
    : data.projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-container">
      <main className="main-content">
        <div className="content-wrapper">
          {/* Hero Section */}
          <div className="hero-section">
            <h1 className="hero-title">Mes Projets</h1>
            <p className="hero-description">
              {"Découvrez une sélection de mes réalisations, allant du développement web full-stack aux applications mobiles ainsi qu'un site vitrine."}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-section">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`filter-btn ${selectedCategory === category.key ? 'active' : ''}`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="project-image">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                      width={400}
                      height={250}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  ) : (
                    <div className="image-placeholder">
                      <div className="icon-circle">
                        <Eye className="eye-icon" />
                      </div>
                    </div>
                  )}
                  <div className="image-overlay"></div>

                  {/* Hover Overlay */}
                  <div className={`hover-overlay ${hoveredProject === project.id ? 'visible' : ''}`}>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        className="action-btn demo-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="btn-icon" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="action-btn github-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="btn-icon" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  {/* Technologies */}
                  <div className="technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <div className="cta-card">
              <div>
                <h3 className="cta-title">Intéressé par mon travail ?</h3>
                <p className="cta-description">
                  {"N'hésitez pas à me contacter pour une opportunité d'alternance."}
                </p>
                <Link href="/contact" passHref>
                  <button className="cta-button">Me contacter</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
