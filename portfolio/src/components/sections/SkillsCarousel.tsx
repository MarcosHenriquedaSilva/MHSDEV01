import React from 'react';
import styles from './SkillsCarousel.module.css';
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Terminal, 
  Globe, 
  Cpu, 
  Layers, 
  Box,
  Figma,
  GitBranch
} from 'lucide-react';

const skills = [
  { name: 'React', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Terminal },
  { name: 'Next.js', icon: Globe },
  { name: 'Database', icon: Database },
  { name: 'Mobile', icon: Smartphone },
  { name: 'UI/UX', icon: Layout },
  { name: 'API', icon: Cpu },
  { name: 'DevOps', icon: Layers },
  { name: 'CSS', icon: Box },
  { name: 'Design', icon: Figma },
  { name: 'Git', icon: GitBranch },
];

export const SkillsCarousel: React.FC = () => {
  // Duplicate the list for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className={styles.skillsSection}>
      <h3 className={styles.skillsTitle}>Minhas Skills</h3>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {duplicatedSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className={styles.skillItem}>
                <div className={styles.skillIcon}>
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
