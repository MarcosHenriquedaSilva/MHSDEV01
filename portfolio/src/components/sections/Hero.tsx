import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <span className={styles.tagline}>{t.hero.tagline}</span>
              <h1 className={styles.title}>
                {t.hero.title}
              </h1>
              <p className={styles.description}>
                {t.hero.description}
              </p>
              <div className={styles.actions}>
                <a href="#contact" className={styles.primaryButton}>
                  {t.hero.cta}
                </a>
              </div>
            </div>
            
            <div className={styles.imageWrapper}>
              <div className={styles.diamondBg}></div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600" 
                alt="Tech Solutions" 
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
