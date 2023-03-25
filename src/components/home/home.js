import React from 'react'
import './home.css'
import Jovem from '../../assets/jovem-afro.png'
import Logo from '../../assets/logo.png'
import Light from '../../assets/light.png'
// import Numbers from '../../assets/numbers.png'
import LogoRed from '../../assets/logo-red.png'

const home = () => {
  return (
    <>

    {/* Inicio IMG Home */}

    <div className="content-info">
      <img src={Light} alt="luz" id="img-light" />
      <img src={Jovem} alt="jovem-afro" className="img-jovem"/>
      <img src={LogoRed} alt="logo-red" className="logo-red"/>
      
    </div>

    {/* Final IMG Home */}

      <div>

      <img src={Logo} alt="logo-action" id="home-logo"/>

      <h1 className="home-title">
        Lorem Ipsum is simply <br></br>
        dummy text of <span>the printing</span>
        <br></br> and typesetting
      </h1>
      
      <p className="home-description">
        Industry. Lorem Ipsum has been the industry's
        <br></br>standard dummy text ever since the.
      </p>

      <button id="button-home">
        Saiba Mais
      </button>

      </div>

    

    </>
  )
}

export default home




{/*

<div>
              
              
              
            </div>
*/}
            