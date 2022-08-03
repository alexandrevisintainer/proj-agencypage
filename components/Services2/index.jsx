import React, { Component } from "react";
import Slider from "react-slick";
import styles from './services2.module.css'
import Image from 'next/image' 
import image1 from '../../public/image1.jpg'
import image2 from '../../public/image2.png'
import image3 from '../../public/image3.jpg'

function Services2 () {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "1000px",
      slidesToShow: 2,
      speed: 500
    };
    return (
      <div className={styles.container}>
        <div className={styles.center}>
            <div className={styles.title} id="Services">
                <h3>O que fazemos</h3>
                <h2>Serviços digitais que aumentam suas vendas!</h2>
                <hr/>
            </div>
            <Slider {...settings}>
                        <div className={styles.card1}>
                            <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                                <Image src={image1} alt="Websites" layout='fill' objectFit='cover'/>
                            </div>
                            <h3>WEBSITES OTIMIZADOS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat ducimus nemo! Nesciunt, dignissimos cupiditate eligendi.</p>
                            <button className={styles.button}>SAIBA MAIS</button>
                        </div>

                        <div className={styles.card2}>
                            <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                                <Image src={image2} alt="Websites" layout='fill' objectFit='cover'/>
                            </div>
                            <h3>IMAGEM EMPRESARIAL</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat ducimus nemo! Nesciunt, dignissimos cupiditate eligendi.</p>
                            <button className={styles.button}>SAIBA MAIS</button>
                        </div>

                        <div className={styles.card3}>
                            <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                                <Image src={image3} alt="Websites" layout='fill' objectFit='cover'/>
                            </div>
                            <h3>DESIGNS</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat ducimus nemo! Nesciunt, dignissimos cupiditate eligendi.</p>
                            <button className={styles.button}>SAIBA MAIS</button>
                        </div>
            </Slider>
        </div>
      </div>
    );
  }
  export default Services2;