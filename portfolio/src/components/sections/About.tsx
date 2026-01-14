import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.css';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.contentSide}>
            <span className={styles.subtitle}>{t.about.subtitle}</span>
            <h2 className={styles.title}>
              {t.about.title}
            </h2>
            <p className={styles.description}>
              {t.about.description}
            </p>
            <div className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>20+</span>
                    <span className={styles.statLabel}>{t.about.stats.projects}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>{t.about.stats.years}</span>
                </div>
                <div className={styles.statItem}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>{t.about.stats.experts}</span>
                </div>
            </div>
          </div>
          <div className={styles.imageSide}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team Working" 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
