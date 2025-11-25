import './style.css'
import { DefaultButton } from '../../Buttons/DefaultButton'
import { motion } from 'framer-motion'


type CardServiceProps = {
    img: string
    titulo: string
    descricao: string
    className?: string
    onClickButton?: () => void
}

export function CardSolutions({ img, titulo, descricao, className, onClickButton }: CardServiceProps){
    return(
        <motion.div
        className={`card-solutions ${ className ?? ''}`}
        initial={{ opacity: 0, scale: 0.5, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        viewport={{ once: true }}>
            <img src={ img } alt="" />
            <div className='card-solutions-infos'>
                <span>{ titulo }</span>
                <p>{ descricao }</p>
            </div>
            <div className='container-default-btn'>
                <DefaultButton
                className='btn-cards-solution-view'
                text='Veja'
                onClick={onClickButton}
            />
            </div>
            
        </motion.div>
        
    )
}