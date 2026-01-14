import React from 'react';
import { Layout, Globe, AppWindow, Cloud } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Services.module.css';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Layout size={32} />,
      title: t.services.items.landing.title,
      description: t.services.items.landing.desc
    },
    {
      icon: <Globe size={32} />,
      title: t.services.items.sites.title,
      description: t.services.items.sites.desc
    },
    {
      icon: <AppWindow size={32} />,
      title: t.services.items.webApps.title,
      description: t.services.items.webApps.desc
    },
    {
      icon: <Cloud size={32} />,
      title: t.services.items.saas.title,
      description: t.services.items.saas.desc
    }
  ];

  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.header}>
            <span className={styles.subtitle}>{t.services.subtitle}</span>
            <h2 className={styles.title}>{t.services.title}</h2>
            <div className={styles.dots}>
               <span className={styles.dot}></span>
               <span className={styles.dot}></span>
               <span className={styles.dot}></span>
            </div>
          </div>
          
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <div className={styles.iconWrapper}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
