import photo1 from '../../../assets/photo1.png'
import photo2 from '../../../assets/photo2.png'
import  EncryptButton  from '../../../animations/EncryptButton'
import { Link } from 'react-scroll'

import './style.css'
import './styleMobile.css'

export function Hero(){

    function openWhatsapp(){
        const phone = '5554991806517'
        const text = 'Olá Bruno! Gostaria de mais informações sobre os serviço de criação de sites'
        const url = `https://wa.me/${phone}?text=${text}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return(
        <section className='section-hero'>
            <div className='container-hero-infos'>
                <h1>Bruno Santos</h1>
                <h3>WEBSITES DEVELOPER</h3>
                <span>Transformando suas ideias de negócio, elevando sua presença digital.</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reprehenderit dolor tenetur odio. Voluptatibus, quis. Doloremque, repellat, veritatis molestias nobis nostrum, dolore aliquam distinctio hic fugiat porro beatae? Non, et.</p>
                <div className='container-hero-btn'>
                    <EncryptButton label="Entre em contatro" className='btn-hero' onClick={openWhatsapp}/>
                    <Link 
                    to="solutions" 
                    smooth={true} 
                    duration={500} 
                    offset={-60} 
                    activeClass="ativo"> 
                        <EncryptButton label="Projetos" className='btn-hero'/>
                    </Link>
                </div>
            </div>

            <div className='container-hero-image'>
                <div className="shape image-front">
                    <img src={ photo2 } alt="" />
                </div>

                <div className="shape image-back">
                    <img src={ photo1 } alt="" />
                </div>
            </div>
        </section>
    )
}