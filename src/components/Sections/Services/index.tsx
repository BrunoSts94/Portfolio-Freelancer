import './style.css'
import './styleMobile.css'
import imgService1 from '../../../assets/serviceImage1.png'
import imgService2 from '../../../assets/serviceImage2.png'
import { motion } from 'framer-motion'


import { CardService } from '../../Cards/CardService'

export function Services(){
    return(
        <section className='section-services'>
            <div className='container-services-info'>
                <motion.div
                initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                whileInView={{ opacity: 1, scale: 1,  filter: "blur(0px)"}}
                transition={{  duration: 0.8, ease: "easeOut" }}
                >
                <h2>Serviços Disponíveis</h2>    
                </motion.div>
                
                <motion.div
                    initial={{ opacity:0, scale:0.8, filter: "blur(20px)" }}
                    whileInView={{ opacity: 1, scale: 1,  filter: "blur(0px)"}}
                    transition={{  duration: 0.8, ease: "easeOut", delay:0.2 }}
                    >
                    <div className='wrapper-solution'>
                        <p>Conheça os serviços oferecidos para impulsionar o crescimento da sua empresa no ambiente digital.</p>   
                    </div>
                    </motion.div>
                 
                
            </div>

            <div className='container-cards-services'>
                    
                    <CardService
                    className='card-service'
                    img={ imgService1 }
                    titulo='Desenvolvimento de Websites'
                    descricao='Criação de sites modernos, responsivos e otimizados para desempenho, utilizando tecnologias atualizadas para garantir velocidade, segurança e uma experiência profissional para seus clientes.'
                    />
                    

                    <CardService 
                    className='card-service'
                    img={ imgService2 }
                    titulo='Desenvolvimento de Agentes de IA'
                    descricao='Criação de assistentes inteligentes personalizados para o seu negócio, capazes de automatizar atendimentos, responder clientes, agendar serviços e otimizar processos. Uma solução prática para reduzir custos e aumentar sua eficiência.'
                    />
            </div>
        </section>
    )
}