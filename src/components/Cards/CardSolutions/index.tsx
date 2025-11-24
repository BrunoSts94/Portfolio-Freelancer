import './style.css'
import { DefaultButton } from '../../Buttons/DefaultButton'


type CardServiceProps = {
    img: string
    titulo: string
    descricao: string
    className?: string
}

export function CardSolutions({ img, titulo, descricao, className }: CardServiceProps){
    return(
        <div className={`card-solutions ${ className ?? ''}`}>
            <img src={ img } alt="" />
            <div className='card-solutions-infos'>
                <span>{ titulo }</span>
                <p>{ descricao }</p>
            </div>
            <DefaultButton
                className='btn-cards-solution-view'
                text='Veja'
            />
        </div>
        
    )
}