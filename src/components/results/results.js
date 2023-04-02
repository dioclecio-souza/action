import React from 'react'
import './results.css'


// Import Imagens 

import Depoimentos from '../../assets/depoimentos.png'
import Computador from '../../assets/computador.png'
import LightFundo from '../../assets/light-fundo-results.png'
import Graficos from '../../assets/graficos.png'

const results = () => {
  return (
    <>
    <div className="title-board">
        <h1>Centenas de perfis, pequenos e médios <br></br>também estao tendo <span>Resultados Incríveis</span></h1>
    </div>


    <div className="content-popping">
      <img src={Depoimentos} alt="depoimentos" />
      <img src={Computador} alt="computador-fundo" id="img-computador"/>
        estao pipocando <br></br> resultados inacreditáveis <br></br> com os stories 10X
    </div>
    <div className="value-invest">
        <h1><span>Valor investido</span> <br></br>no gerenciador <br></br>do facebook e <br></br>google</h1>
    </div>


    {/* Imagens Fundo Resultados */}

    <img src={LightFundo} alt="luz-fundo" id="luz-fundo"/>
    <img src={Graficos} alt="graficos" id="graficos" />
    </>
  )
}

export default results