import styles from './navbar.module.css';
import Image from 'next/image'
import logo from '../../public/logo.png'
import instagram from '../../public/instagram.png'
import facebook from '../../public/facebook.png'
import whatsapp from '../../public/whatsapp.png'

function Navbar () {
    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <div className={styles.logo}>
                    <Image src={logo} alt="logo" layout='fill' objectFit='fill'/> 
                </div>               
                <ul className={styles.menu}>
                    <li><a href="#Services">Nossos Serviços</a></li>
                    <li><a href="#">Entre em contato</a></li>
                </ul>
                <div className={styles.social}>
                    <a href='https://wa.me/5595984077249' target='_blank' rel="noreferrer"><Image src={whatsapp} alt="Whatsapp Image" height="25px" width="25px" /></a>
                    <a className={styles.insta} href="https://www.instagram.com/visintaineragency/" target='_blank' rel="noreferrer" ><Image src={instagram} alt="Instagram Image" height="25px" width="25px" /></a>
                    <a className={styles.face} href="https://www.facebook.com/VisintainerAgency" target='_blank' rel="noreferrer" ><Image src={facebook} alt="Facebook Image" height="25px" width="25px" /></a>
                </div>

            </div>
        </div>
    )
}
export default Navbar;