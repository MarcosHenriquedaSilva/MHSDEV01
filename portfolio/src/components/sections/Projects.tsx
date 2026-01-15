import React from 'react';
import styles from './Projects.module.css';
import { SkillsCarousel } from './SkillsCarousel';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Dashboard Financeiro",
      category: "React / TypeScript",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Aplicativo E-Commerce",
      category: "Next.js / Tailwind",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Agência de Viagens",
      category: "Web Design / Desenvolvimento",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Interface de Chat com IA",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Projetos</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <a href="#" className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.image} 
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <span className={styles.projectCategory}>{project.category}</span>
            </div>
          </a>
        ))}
      </div>

      <SkillsCarousel />
    </div>
  );
};
