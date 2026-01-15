import React from 'react';
import styles from './Hero.module.css';
import heroImage from '../../assets/01.png';

export const Hero: React.FC = () => {
  return (
    <div className={styles.heroContentWrapper}>
      <div className={styles.avatarWrapper}>
        <img 
          src={heroImage} 
          alt="Marcos Henrique" 
          className={styles.heroImage} 
        />
      </div>

      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Desenvolvedor FullStack.
        </h1>
        
        <p className={styles.description}>
          Crio sistemas web sólidos e escaláveis com ótimas experiências de usuário.
        </p>
        
        <div className={styles.ctaContainer}>
          <a href="#projects" className={styles.ctaButton}>
            VER MEUS PROJETOS
          </a>
        </div>
      </div>
    </div>
  );
};
