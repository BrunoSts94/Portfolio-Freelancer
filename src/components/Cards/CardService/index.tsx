import './style.css'
import EletricBorder from '../../../animations/EletricBorder/EletricBorder'

type CardServiceProps = {
    img: string
    titulo: string
    descricao: string
    className?: string
}

export function CardService({ img, titulo, descricao, className }: CardServiceProps){
    return(
            <EletricBorder
            color="#a251f3"
            speed={1}
            chaos={0.8}
            thickness={3}
            style={{ borderRadius: 28 }}
            className={`eletric ${ className ?? ''}`} >

                    <div className='conatiner-card-service'>
                        <img src={img} alt="imagem do serviço" />
                        <div className='section-card-service-info'>
                        <h3>{titulo}</h3>
                        <p>{ descricao }</p>
                        </div>
                    </div>
                    

            </EletricBorder>
    )
}