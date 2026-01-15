import React from 'react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Contato</h2>
      
      <div className={styles.contentWrapper}>
        <div className={styles.formWrapper}>
          <p className={styles.introText}>
            Tem um projeto em mente ou quer apenas dizer oi? Sinta-se à vontade para me enviar uma mensagem.
          </p>
          
          <form 
            className={styles.form} 
            action="https://formsubmit.co/mhs.02@hotmail.com" 
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />
            <input type="hidden" name="_subject" value="Portfolio Contact" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Seu Nome</label>
              <input type="text" name="name" id="name" className={styles.input} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>Seu E-mail</label>
              <input type="email" name="email" id="email" className={styles.input} required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="message" className={styles.label}>Como posso ajudar?</label>
              <textarea name="message" id="message" className={styles.textarea} required />
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
