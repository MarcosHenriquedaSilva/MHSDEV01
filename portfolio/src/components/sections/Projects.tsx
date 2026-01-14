import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  category: 'landing' | 'sites' | 'webApps' | 'saas';
  image: string;
}

const categories = ['all', 'landing', 'sites', 'webApps', 'saas'] as const;

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: t.projects.items.p1.title,
      category: 'webApps',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 2,
      title: t.projects.items.p2.title,
      category: 'sites',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 3,
      title: t.projects.items.p3.title,
      category: 'saas',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=500',
    },
     {
      id: 4,
      title: t.projects.items.p4.title,
      category: 'landing',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=500',
    },
     {
      id: 5,
      title: t.projects.items.p5.title,
      category: 'webApps',
      image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=500',
    },
     {
      id: 6,
      title: t.projects.items.p6.title,
      category: 'sites',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=500',
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <span className={styles.subtitle}>{t.header.projects}</span>
                <h2 className={styles.title}>{t.projects.title}</h2>
            </div>
            <div className={styles.filterContainer}>
                {categories.map(cat => (
                <button
                    key={cat}
                    className={`${styles.filterButton} ${activeCategory === cat ? styles.active : ''}`}
                    onClick={() => setActiveCategory(cat)}
                >
                    {t.projects.categories[cat]}
                </button>
                ))}
            </div>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <span className={styles.cardCategory}>{t.projects.categories[project.category]}</span>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <button className={styles.viewButton}>
                        View Details <ArrowUpRight size={16} />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
