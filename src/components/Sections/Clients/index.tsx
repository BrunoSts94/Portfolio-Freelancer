import './style.css'
import './styleMobile.css'
import { motion } from "framer-motion";
import { DefaultButton } from '../../Buttons/DefaultButton'

import icone1 from '../../../assets/icone.png'

export function Clients(){
    const logos = [ icone1 , icone1, icone1, icone1 , icone1, icone1, icone1 , icone1, icone1];
    return(
        <section className='section-clients'>
            <div className='container-section-clients'>
                <h2>Clientes que ja elevaram sua presença com nossos serviços</h2>
                <div className='container-clients-icons'>

                        <motion.div
                        className="motion-div"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "linear",
                        }}>
                        
                        {logos.concat(logos).map((logo, index) => (
                        <img
                        key={index}
                        src={logo}
                        alt="tech"
                        className="icon-client"/>
                        ))}
                        </motion.div>
                </div>
                <p>Venha fazer fazer parte da nossa história voce também!</p>
                <DefaultButton
                text='Quero criar meu Site'/>
            </div>
        </section>
    )
}