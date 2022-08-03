import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';
import instagram from '../../public/instagram.png';
import facebook from '../../public/facebook.png';
import whatsapp from '../../public/whatsapp.png'
import Image from 'next/image'

function Contact () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pgwk1jf', 'template_281a87g', form.current, '0oZEsDpHc0Dn5ZAYE')
      .then((result) => {
          console.log('Mensagem enviada');
      }, (error) => {
          console.log('Erro ao enviar mensagem');
      });
      e.target.reset();
  };

  return (
    <div className={styles.container}>
        <h4 id="contact">Entre em contato</h4>
        <h2>Vamos tomar um café?</h2>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <label>Nome</label>
            <input type="text" name="user_name" />
            <label>Telefone</label>
            <input type="tel" name="user_phone" />
            <label>Mensagem</label>
            <textarea name="message" rows="8" wrap='hard' maxlength="800"/>
            <input type="submit" value="Enviar" />
        </form>
        <div className={styles.social}>
          <a href='https://www.instagram.com/visintaineragency/' target='_blank'><Image src={instagram} height="25px" width="25px" /></a>
          <a href='https://wa.me/5595984077249' target='_blank'><Image src={whatsapp} height="25px" width="25px" /></a>
          <a href='https://www.facebook.com/VisintainerAgency' target='_blank'><Image src={facebook} height="25px" width="25px" /></a>
        </div>
        <h3 className={styles.agency}>Visintainer Agency</h3> 
    </div>
  );
};

export default Contact;
