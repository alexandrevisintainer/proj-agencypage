import styles from './services.module.css'
import Image from 'next/image' 
import image1 from '../../public/image1.jpg'
import image2 from '../../public/image2.png'
import image3 from '../../public/image3.jpg'

function Services () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.title} id="Services">
                    <h3>O que fazemos</h3>
                    <h2>Serviços digitais que aumentam suas vendas!</h2>
                    <hr/>
                </div>
                <div className={styles.cards} > 
                    <div className={styles.card1}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={image1} alt="Websites" layout='fill' objectFit='cover'/>
                        </div>
                        <h3>WEBSITES OTIMIZADOS</h3>
                        <p>Websites customizados com as tecnologias mais atuais do mercado.</p>
                        <ul>
                            <li>- Landing Pages</li>
                            <li>- Sites Institucionais</li>
                            <li>- Blogs</li>
                        </ul> 
                        <button className={styles.button}>SAIBA MAIS</button>
                    </div>

                    <div className={styles.card2}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={image2} alt="Imagem empresarial" layout='fill' objectFit='cover'/>
                        </div>
                        <h3>IMAGEM EMPRESARIAL</h3>
                        <p>Desenvolvemos sua identidade visual corporativa, junto com você.</p>
                        <div className={styles.lista}>
                            <ul>
                                <li>- Logo</li>
                                <li>- Cartão de visita</li>
                                <li>- Papel Timbrado</li>
                            </ul>
                            <ul>
                                <li>- Envelope</li>
                                <li>- Paletade cores</li>
                                <li>- Fontes</li>
                            </ul> 
                        </div>
                        <button className={styles.button}>SAIBA MAIS</button>
                    </div>

                    <div className={styles.card3}>
                        <div className={styles.image} style={{borderRadius: '10px', overflow: 'hidden'}}>
                            <Image src={image3} alt="Designs" layout='fill' objectFit='cover'/>
                        </div>
                        <h3>DESIGNS</h3>
                        <p>Criamos artes para a divulgação da sua empresa ou projeto pessoal.</p>
                        <ul>
                            <li>- Flyers</li>
                            <li>- Posts</li>
                            <li>- Ilustrações</li>
                        </ul> 
                        <button className={styles.button}>SAIBA MAIS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;