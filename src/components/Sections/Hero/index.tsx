import imgHero from '../../../assets/hero-img.png'
import photo2 from '../../../assets/heroImage2.png'
import  EncryptButton  from '../../../animations/EncryptButton'
import { Link } from 'react-scroll'

import './style.css'
import './styleMobile.css'
import { motion } from 'framer-motion'

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
                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                animate={{ opacity:1, scale:1, filter: "blur(0px)"  }}
                transition={{  duration: 0.8, ease: "easeOut" }}
                >
                    <h1>&#62;Bruno_Santos _</h1>
                </motion.div>

                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                animate={{ opacity:1, scale:1, filter: "blur(0px)"  }}
                transition={{  duration: 0.8, ease: "easeOut", delay: 0.2}}
                >
                    <h3>Desenvolvedor de Websites</h3>    
                </motion.div>
                
                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                animate={{ opacity:1, scale:1, filter: "blur(0px)"  }}
                transition={{  duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                <span>Transformando suas ideias de negócio, elevando sua presença digital.</span>    
                </motion.div>
                
                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                animate={{ opacity:1, scale:1, filter: "blur(0px)"  }}
                transition={{  duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                <p>Atuo no desenvolvimento de sites modernos, rápidos e personalizados para destacar o seu negócio no digital.<br/>
                Meu objetivo é transformar visitantes em clientes, criando páginas profissionais que refletem a essência da sua marca e aumentam suas oportunidades de venda.<br/>
                Se você quer fortalecer sua presença online, atrair mais clientes e se posicionar à frente da concorrência, estou aqui para criar a solução ideal para o seu negócio.
                </p>   
                </motion.div>
                
                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                animate={{ opacity:1, scale:1, filter: "blur(0px)"  }}
                transition={{  duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
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
                </motion.div>
                
            </div>

            <div className='container-hero-image'>  
                <img src={imgHero} alt="imagem de apresentação de Bruno" />
            </div>
        </section>
    )
}