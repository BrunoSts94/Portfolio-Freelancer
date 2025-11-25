import './style.css'
import './styleMobile.css'
import { CardSolutions } from '../../Cards/CardSolutions'

import site1 from '../../../assets/beauty-img.jpg'
import site2 from '../../../assets/elite-img.jpg'

export function Solutions(){
    return(
        <section className='section-solutions'>
            <div className='container-section-solutions'>
                <div className='container-solutions-exists'>
                    <h2>Vamos criar seu site?</h2>
                    <p>Escolha entre modelos profissionais já desenvolvidos ou traga sua ideia para criarmos algo totalmente exclusivo para o seu negócio. Seja qual for sua necessidade, entrego um site moderno, funcional e preparado para gerar resultados.</p>
                    <div className='container-section-solutions-cards'>
                        <CardSolutions
                        img={site1}
                        titulo='Beauty Saloon'
                        descricao='Projeto criado para seguimento de salões de beleza e clínicas estéticas.'
                        onClickButton={() => window.open('https://beauty-salloon-teste.netlify.app', '_blank')}
                        />

                        <CardSolutions
                        img={site2}
                        titulo='Elite treinamentos'
                        descricao='Modelo para empresas do segmento de segurança no Trabalho'
                        onClickButton={() => window.open('https://elitetreinamentos.netlify.app', '_blank')}
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