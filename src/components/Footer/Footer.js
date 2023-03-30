import React from 'react'
import LogoFooter from '../../assets/logo.png'
import './footer.css'
import Location from '../../assets/localizacao.png'
import Email from '../../assets/email.png'
import Tel from '../../assets/tel.png'


const Footer = () => {
  return (

    <footer>
        <div>
          <img src={LogoFooter} alt="logo-footer" id="logo-footer" />\
          <p className="p-logo">Politicas de Privacidade <br></br> Termos de Uso</p>
        </div>
        
        <div>
            <img src={Location} alt="location-footer" id="location" />
            <p className="location-title">ENDEREÇO</p>
            <p className="p-location">Lorem Ipsum is simply dummy <br></br>
            texto the printing and typesetting <br></br>industry, CEP 6500-000</p>
        </div>

        <div>
            <img src={Email} alt="email" id="email"/> 
            <img src={Tel} alt="tel"  id="tel"/>
            <p className="contact-title">CONTATO</p>
            <p className="p-desc">
              contato@gmail.com<br></br>
              (83) 99999-9999
            </p>
        </div>

    </footer>

  )
}

export default Footer