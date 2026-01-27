import React from 'react';
import styles from './About.module.css';
import heroImage from '../../assets/01.png';
import { Check } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentGrid}>
        <div className={styles.photoArea}>
          <div className={styles.accentBlob} />
          <img src={heroImage} alt="Marcos Henrique" className={styles.profileImage} />
        </div>
        
        <div>
          <h2 className={styles.sectionTitle}>Sobre</h2>
          <div className={styles.bioText}>
            <p>
              Sou Marcos Henrique, um <strong>Desenvolvedor Full Stack</strong> focado em construir produtos digitais úteis e bem acabados.
            </p>
            <p>
              Trabalho com tecnologias modernas, atenção a detalhes e compromisso com prazos. Meu objetivo é transformar ideias em soluções concretas.
            </p>
            <p>
              Tenho experiência sólida em front‑end e back‑end, escrevendo código limpo e performático.
            </p>
          </div>
          <div className={styles.bullets}>
            <div className={styles.bullet}>
              <span className={styles.bulletIcon}><Check size={18} strokeWidth={2} /></span>
              <span className={styles.bulletText}>Comunicação constante com o cliente</span>
            </div>
            <div className={styles.bullet}>
              <span className={styles.bulletIcon}><Check size={18} strokeWidth={2} /></span>
              <span className={styles.bulletText}>Criação de projetos fantásticos</span>
            </div>
            <div className={styles.bullet}>
              <span className={styles.bulletIcon}><Check size={18} strokeWidth={2} /></span>
              <span className={styles.bulletText}>Serviços exclusivos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
