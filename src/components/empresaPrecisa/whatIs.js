import React from 'react'
import LogoEmpresa from '../../assets/logo-empresa.png'

import './whatIs.css'

const oQue = () => {
  return (
      <div className="whatIs">
        <img src={LogoEmpresa} alt="logo-empresa"/>
        <h1 className="title-whatIs"> O QUE SUA EMPRESA PRECISA</h1>
        <h2 className="sub-title-whatIs">Contrate um gestor de tráfego <br></br> 
        formado pela maior comunidade 
        <br></br> de profissionais em anúncios 
        <br></br> online
        do brasil.
        </h2>
        <button id="button-whatIs">Quero começar agora</button>
      </div>
  )
}

export default oQue