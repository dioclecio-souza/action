import React from 'react'
import './whoIs.css'
import Jovem from '../../assets/jovem-camisa.png'
import Entony from '../../assets/Entony.png'
import LogoBorder from '../../assets/logo-border.png'
import Light1 from '../../assets/light-whois1.png'


const whoIsEntony = () => {
  return (
    <div className="container-whoIs">
        <img src={Jovem} alt="jovem" id="jovem-afro" />
        <img src={Entony} alt="assinatura" id="sign" />
        <img src={LogoBorder} alt="logo" id="logo-border" />
        <img src={Light1} alt="logo" id="light1" />
        <h1 className="title-whoIs">Quem é <span>Entony?</span></h1>
        <p className="desc-whoIs">Lorem Ipsum is simply dummy text of the printing<br></br>
          and typesetting industry. Lorem Ipsum has been the<br></br>
          industry's standard dummy text ever since the 1500s,<br></br>
          Lorem Ipsum is simply dummy text of the printing<br></br>
          and typesetting industry. Lorem Ipsum has been the<br></br>
          industry's standard dummy text ever since the 1500s,
        </p>
    </div>
  )
}

export default whoIsEntony