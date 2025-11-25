import { ParticlesComponent } from './animations/Particles'
import {Element} from 'react-scroll'

//Components
import { Header } from './components/Header'
import { Hero } from './components/Sections/Hero'
import { Services } from './components/Sections/Services'
import { Solutions } from './components/Sections/Solutions'
import { Clients } from './components/Sections/Clients'
import { BaseBoard } from './components/Sections/BaseBoard'


function App() {
  

  return (
    <>
      <ParticlesComponent/>
      <Element name='inicio'>
        <Header/>
      </Element>
      
      <Hero/>

      <Element name='services'>
        <Services/>
      </Element>

      <Element name='solutions'>
        <Solutions/>
      </Element>

      <Element name='clients'>
        <Clients/>
      </Element>

      <Element name='contact'>
        <BaseBoard/>
      </Element>
    </>
  )
}

export default App
