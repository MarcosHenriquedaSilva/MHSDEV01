import React from 'react';
import { Send, MessageSquare, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container">
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formSide}>
            <h2 className={styles.title}>
              <MessageSquare size={28} color="#FFD700" fill="#FFD700" /> 
              {t.contact.title}
            </h2>

            <div className={styles.emailContainer}>
              <a href="mailto:mhs.02@hotmail.com" className={styles.emailLink}>
                <Mail size={20} color="#FFD700" />
                <span>mhs.02@hotmail.com</span>
              </a>
            </div>
            
            <form 
              className={styles.form} 
              action="https://formsubmit.co/mhs.02@hotmail.com" 
              method="POST"
            >
              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="hidden" name="_subject" value="Novo contato via Portfolio MHS Dev" />

              <div className={styles.inputGroup}>
                <label htmlFor="name" style={{ fontWeight: 600 }}>{t.contact.form.name}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  className={styles.input} 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email" style={{ fontWeight: 600 }}>{t.contact.form.email}</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email"
                  className={styles.input} 
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message" style={{ fontWeight: 600 }}>{t.contact.form.message}</label>
                <textarea 
                  name="message" 
                  id="message"
                  className={styles.textarea} 
                  required 
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                {t.contact.form.submit} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
