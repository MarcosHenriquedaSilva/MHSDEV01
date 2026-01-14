import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const LanguageSwitcher = () => (
    <div className={styles.langContainer}>
      <Globe size={16} className={styles.langIcon} />
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as any)}
        className={styles.langSelect}
      >
        <option value="pt-BR">PT</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            MHS
          </div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <a href="#" className={styles.link}>{t.header.home}</a>
            <a href="#services" className={styles.link}>{t.header.services}</a>
            <a href="#projects" className={styles.link}>{t.header.projects}</a>
            <a href="#about" className={styles.link}>{t.header.about}</a>
            <a href="#contact" className={styles.link}>{t.header.contact}</a>
            <div className={styles.controls}>
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuBtn} 
            onClick={toggleMenu}
            aria-label="Abrir Menu"
          >
            <Menu size={28} color="var(--text-primary)" />
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
            <button 
              className={styles.closeBtn} 
              onClick={closeMenu}
              aria-label="Fechar Menu"
            >
              <X size={28} />
            </button>
            
            <a href="#" className={styles.mobileLink} onClick={closeMenu}>{t.header.home}</a>
            <a href="#services" className={styles.mobileLink} onClick={closeMenu}>{t.header.services}</a>
            <a href="#projects" className={styles.mobileLink} onClick={closeMenu}>{t.header.projects}</a>
            <a href="#about" className={styles.mobileLink} onClick={closeMenu}>{t.header.about}</a>
            <a href="#contact" className={styles.mobileLink} onClick={closeMenu}>{t.header.contact}</a>
            
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexDirection: 'column', alignItems: 'center' }}>
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
