import styles from './tecnologies.module.css';
import Image from 'next/image'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import react from '../../public/react.png'
import next from '../../public/next.png'
import node from '../../public/node.png'
import firebase from '../../public/firebase.png'
import photoshop from '../../public/photoshop.png'
import vercel from '../../public/vercel.png'

function Tecnologies () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1500,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.title}>
                    <h2>Tecnologias Ultilizadas</h2>
                    <h3>Ultilizamos as mais otimizadas tecnologias de desenvolvimento!</h3>
                </div>
                <Slider {...settings}>
                    <div className={styles.image}>
                        <Image src={react} alt="react js" layout='fill' objectFit='cover'/>
                    </div>
                    <div className={styles.image}>
                        <Image src={next} alt="next js" layout='fill' objectFit='cover'/>
                    </div>
                    <div className={styles.image}>
                        <Image src={node} alt="node js" layout='fill' objectFit='cover'/>
                    </div>
                    <div className={styles.image}>
                        <Image src={firebase} alt="firebase" layout='fill' objectFit='cover'/>
                    </div>
                    <div className={styles.image}>
                        <Image src={photoshop} alt="adobe photoshop" layout='fill' objectFit='cover'/>
                    </div>
                    <div className={styles.image}>
                        <Image src={vercel} alt="vercel" layout='fill' objectFit='cover'/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
export default Tecnologies;