import Typewriter from 'typewriter-effect'; 
import styles from './home.module.css'
import Navbar from '../Navbar'

function Hero () {
    return(
        <div className={styles.all}>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.center}>
                    <h1>Websites customizados e Imagem Empresarial</h1> 
                    <div className={styles.text}>
                        <Typewriter 
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 80,
                            deleteSpeed: 60,
                            pauseFor: 2000,
                            strings:[
                                "Desenvolvemos Websites responsivos",
                                "Desenvolvemos a imagem da sua empresa",
                                "Criamos artes incríveis"
                            ]
                        }}
                        />
                    </div>
                    <h4>Eleve o nível da sua empresa</h4>
                    <a href='https://wa.me/5595984077249' target='_blank' rel="noreferrer">Entre em contato</a>
                </div>
            </div>
        </div>
    )
}
export default Hero;