import React from 'react';
import styles from './About.module.css';
import { Code, Layout, Smartphone } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentGrid}>
        <div className={styles.bioColumn}>
          <h2 className={styles.sectionTitle}>Sobre</h2>
          <div className={styles.bioText}>
            <p>
              Sou Marcos Henrique, um <strong>Desenvolvedor Full Stack</strong> apaixonado por criar produtos digitais que ajudam pessoas.
            </p>
            <p>
              Sou um desenvolvedor apaixonado por criar soluções que funcionam. Com anos de experiência, ajudo empresas e empreendedores a atingirem seus objetivos através de tecnologia de ponta. Foco em qualidade, prazo e resultados reais.
            </p>
            <p>
              Com mais de 5 anos de experiência em desenvolvimento web, tenho uma base sólida em tecnologias front-end e back-end. Foco em escrever código limpo, elegante e eficiente.
            </p>
          </div>
        </div>

        <div className={styles.skillsColumn}>
          <h3 className={styles.subTitle}>O que eu faço</h3>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <Code className={styles.icon} size={28} />
              <div>
                <h4>Desenvolvimento Web</h4>
                <p>Criação de sites rápidos e responsivos usando tecnologias modernas como React, Next.js e Node.js.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <Layout className={styles.icon} size={28} />
              <div>
                <h4>UI/UX Design</h4>
                <p>Design de interfaces intuitivas e bonitas com foco na experiência do usuário.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <Smartphone className={styles.icon} size={28} />
              <div>
                <h4>Mobile First</h4>
                <p>Garantia de que cada projeto funcione perfeitamente em todos os dispositivos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
