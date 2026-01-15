import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#hero">M</a>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#hero" className={styles.navLink}>Início</a></li>
            <li><a href="#about" className={styles.navLink}>Sobre</a></li>
            <li><a href="#projects" className={styles.navLink}>Projetos</a></li>
            <li><a href="#contact" className={styles.navLink}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
