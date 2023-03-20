import React from 'react'
import './home.css'
import Jovem from '../../images/jovem-afro.png'
import Light from '../../images/light.png'
import Logo from '../../images/logo.png'
import Numbers from '../../images/numbers.png'

const home = () => {
  return (

      <div className="container">
        <div>
          <img src={Logo} alt="logo" id="logo" />
          <h1 className="home-title">Lorem Ipsum is simply <br></br>
          dummy text of <span>the printing</span>
          <br></br> and typesetting
          </h1>
        </div>
        
        
        
        
        <div className="home-description">
          <p>Industry. Lorem Ipsum has been the industry's
          <br></br>standard dummy text ever since the.</p>
        </div>
      </div>
      
  )
}

export default home