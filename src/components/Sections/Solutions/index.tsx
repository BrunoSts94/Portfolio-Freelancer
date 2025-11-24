import './style.css'
import './styleMobile.css'
import { CardSolutions } from '../../Cards/CardSolutions'

import site1 from '../../../assets/photo1.png'

export function Solutions(){
    return(
        <section className='section-solutions'>
            <div className='container-section-solutions'>
                <div className='container-solutions-exists'>
                    <h2>Vamos criar seu site?</h2>
                    <p>Escolha entre modelos de sucesso ja desenvolvidos, ou solte sua imaginação e vamos criar algo novo e totalmente único para seu negócio.</p>
                    <div className='container-section-solutions-cards'>
                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />

                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />

                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />

                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />

                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />

                        <CardSolutions
                        img={site1}
                        titulo='Projeto A'
                        descricao='Projeto desenvolvido para a empresa A'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}