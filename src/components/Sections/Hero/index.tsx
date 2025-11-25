import photo1 from '../../../assets/heroImg1.jpg'
import photo2 from '../../../assets/heroImage2.png'
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
                <h3>WEBSITE DEVELOPER</h3>
                <span>Transformando suas ideias de negócio, elevando sua presença digital.</span>
                <p>Atuo no desenvolvimento de sites modernos, rápidos e personalizados para destacar o seu negócio no digital.
                Meu objetivo é transformar visitantes em clientes, criando páginas profissionais que refletem a essência da sua marca e aumentam suas oportunidades de venda.<br/>
                Se você quer fortalecer sua presença online, atrair mais clientes e se posicionar à frente da concorrência, estou aqui para criar a solução ideal para o seu negócio.
                </p>
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
                    <img src={ photo1 } alt="" />
                </div>

                <div className="shape image-back">
                    <img src={ photo2 } alt="" />
                </div>
            </div>
        </section>
    )
}