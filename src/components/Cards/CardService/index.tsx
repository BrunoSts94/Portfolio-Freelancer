import './style.css'

type CardServiceProps = {
    img: string
    titulo: string
    descricao: string
    className?: string
}

export function CardService({ img, titulo, descricao, className }: CardServiceProps){
    return(
        <div className='conatiner-card-service'>
            <img src={img} alt="imagem do serviço" />
            <div className='section-card-service-info'>
                <h3>{titulo}</h3>
                <p>{ descricao }</p>
            </div>
        </div>
    )
}