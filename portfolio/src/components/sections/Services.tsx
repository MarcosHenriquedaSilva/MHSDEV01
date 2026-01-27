import React from 'react';
import styles from './Services.module.css';
import { Code, Layout, Smartphone } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Meus Serviços</h2>
        <p className={styles.sectionSubtitle}>
          Soluções digitais com foco em desempenho, estética e experiência. Uso tecnologias modernas e boas práticas para entregar resultados reais.
        </p>
      </div>

      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap}>
              <Code size={22} strokeWidth={1.8} />
            </div>
            <h3 className={styles.cardTitle}>Desenvolvimento Web</h3>
          </div>
          <p className={styles.cardText}>
            Criação de sites rápidos e responsivos usando tecnologias modernas como React, Next.js e Node.js.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardAccent}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap}>
              <Layout size={22} strokeWidth={1.8} />
            </div>
            <h3 className={styles.cardTitle}>UI/UX Design</h3>
          </div>
          <p className={styles.cardText}>
            Design de interfaces intuitivas e bonitas com foco na experiência do usuário.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrap}>
              <Smartphone size={22} strokeWidth={1.8} />
            </div>
            <h3 className={styles.cardTitle}>Mobile First</h3>
          </div>
          <p className={styles.cardText}>
            Garantia de que cada projeto funcione perfeitamente em todos os dispositivos.
          </p>
        </div>
      </div>

      <div className={styles.ctaRow}>
        <a href="#contact" className={styles.ctaButton}>Me contrate</a>
      </div>
    </div>
  );
};
