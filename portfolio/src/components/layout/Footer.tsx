import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>© {new Date().getFullYear()} MHSDEV. {t.footer.rights}</p>
        <div className={styles.socials}>
          <a href="#" className={styles.socialLink} aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="#" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className={styles.socialLink} aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
