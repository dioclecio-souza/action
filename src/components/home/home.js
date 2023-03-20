import React from 'react'
import './home.css'
import Jovem from '../../images/jovem-afro.png'
import Light from '../../images/light.png'
import Logo from '../../images/logo.png'
import Numbers from '../../images/numbers.png'
import { Button } from 'bootstrap'

const home = () => {
  return (

      <div className="container">
        <div>
            <div className="content-info">
              <img src={Logo} alt="logo" id="logo" />
              <h1 className="home-title">Lorem Ipsum is simply <br></br>
              dummy text of <span>the printing</span>
              <br></br> and typesetting
              </h1>
              <p className="home-description">Industry. Lorem Ipsum has been the industry's
              <br></br>standard dummy text ever since the.</p>
              <button id="button">
                Saiba Mais
              </button>
            </div>
        </div>
      </div>
      
  )
}

export default home