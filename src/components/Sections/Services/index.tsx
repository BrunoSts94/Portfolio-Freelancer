import './style.css'
import './styleMobile.css'
import imgService1 from '../../../assets/photo1.png'


import { CardService } from '../../Cards/CardService'

export function Services(){
    return(
        <section className='section-services'>
            <div className='container-services-info'>
                <h2>Serviços Disponíveis</h2>
                <p>Conheça os serviços que oferecemos para você e sua empresa</p>
            </div>
            <div className='container-cards-services'>
                    <CardService
                    className='card-service'
                    img={ imgService1 }
                    titulo='Desenvolvimento de Websites'
                    descricao='Desenvolvimento de Websites modernos e responsivos utilizando o que há de mais novo no mercado se tratando de tecnologias'
                    />

                    <CardService 
                    className='card-service'
                    img={ imgService1 }
                    titulo='Desenvolvimento de Agentes de IA'
                    descricao='Desenvolvimento de agentes para atendimento e disponibilização de informações direto no site, e agendamento de horarios para seu negocio via google calendar'
                    />
            </div>
        </section>
    )
}