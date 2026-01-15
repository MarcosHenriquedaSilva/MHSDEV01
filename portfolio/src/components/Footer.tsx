import React from 'react';
import styles from './Footer.module.css';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialStrip}>
        <a href="#" className={styles.socialLink} aria-label="Github"><Github size={24} /></a>
        <a href="#" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={24} /></a>
        <a href="mailto:contato@exemplo.com" className={styles.socialLink} aria-label="Email"><Mail size={24} /></a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Marcos Henrique. Todos os direitos reservados.
      </div>
    </footer>
  );
};
