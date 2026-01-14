import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Message sent (simulation).');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="container">
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formSide}>
            <h2 className={styles.title}>
              <MessageSquare size={28} color="#FFD700" fill="#FFD700" /> 
              {t.contact.title}
            </h2>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" style={{ fontWeight: 600 }}>{t.contact.form.name}</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name"
                  className={styles.input} 
                  value={formState.name}
                  onChange={handleChange}
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
                  value={formState.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="message" style={{ fontWeight: 600 }}>{t.contact.form.message}</label>
                <textarea 
                  name="message" 
                  id="message"
                  className={styles.textarea} 
                  value={formState.message}
                  onChange={handleChange}
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
