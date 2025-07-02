import React from 'react';
import Head from 'next/head';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../contact/contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <Head>
        <title>Contact - Charlène Duret</title>
        <meta name="description" content="Contactez Charlène Duret" />
      </Head>

      <main className="contact-wrapper">
  <div className="contact-main">
    <section className="contact-section contact-info">
      <p>
        Une envie d&apos;échanger, intéressé(e) par mon profil pour une future alternance ? Vous pouvez m&apos;écrire à cette adresse{' '}
        <a href="mailto:charlene.3972@gmail.com">charlene.3572@gmail.com</a> et je vous répondrai avec grand plaisir. :)
      </p>
    </section>
    <section className="contact-section social-media">
      <div>
        <p>Retrouvez-moi également sur les réseaux, pour se connecter et partager autrement.</p>
        <div className="social-icons">
  <a href="https://www.linkedin.com/in/charlene-duret/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={32} />
  </a>
  <a href="https://github.com/charlene-44" target="_blank" rel="noopener noreferrer">
    <FaGithub size={32} />
  </a>
</div>
      </div>
    </section>
  </div>
</main>

    </div>
  );
};

export default Contact;
