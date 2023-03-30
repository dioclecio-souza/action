import React from 'react'
import  './work.css'
import LogoWork from '../../assets/logo-work.png'

const workWithUS = () => {
  return (
    <div className="content-work">
        <img src={LogoWork} alt="logo-work" id="logowork"/>
        <h1 className="content-title">Quer Trabalhar <br></br>conosco?</h1>
        <p className="content-desc">Clique no botao e entre em contato</p>
        <button className="content-button">Entre em contato</button>
    </div>
  )
}

export default workWithUS