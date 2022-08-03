import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Home'
import Services from '../components/Services'
import Tecnologies from '../components/Tecnologies'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Visintainer Agency</title>
        <meta name="title" content="Visintainer Agency"/>
        <meta name="description" content="Criamos Websites Customizados com as tecnologias mais atuais do Mercado.
        Atualizamos ou criamos a imagem da sua empresa junto com você."/>
        <link rel="icon" href="/logo.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Visintainer Agency - Websites e Imagem Empresarial."/>
        <meta property="og:description" content="Criamos Websites Customizados com as tecnologias mais atuais do Mercado.
        Atualizamos ou criamos a imagem da sua empresa junto com você."/>
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Visintainer Agency - Websites e Imagem Empresarial."/>
        <meta property="twitter:description" content="Criamos Websites Customizados com as tecnologias mais atuais do Mercado.
        Atualizamos ou criamos a imagem da sua empresa junto com você."/>
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"></meta>
      </Head>

      <Hero />
      <Services />
      <Tecnologies />
      <Contact />
      
    </div>
  )
}
