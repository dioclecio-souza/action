import React from 'react'
import './results.css'


// Import Imagens 

import Depoimentos from '../../assets/depoimentos.png'
import Computador from '../../assets/computador.png'
import LightFundo from '../../assets/light-fundo-results.png'
import Graficos from '../../assets/graficos.png'
import LogoFundo from '../../assets/fundo-logo.png'
import Mulher from '../../assets/mulher-foto.png'
import MenorMaior from '../../assets/menor_maior.png'

const results = () => {
  return (
    <>

      <div>
          <h1 className="title-board">Centenas de perfis, pequenos e médios <br></br> também estao tendo <span>Resultados Incríveis</span></h1>
      </div>


    {/* Box Depoimentos */}

    <div className="box-depoimentos">
        <img src={Mulher} alt="mulher-foto" className="img-mulher"></img>
        <h1 className="title-depoimentos">LÍGIA CAETANO</h1>
        <p className="p-depoimentos">Industry. Lorem Ipsum has<br></br>
        been the industry's standard<br></br>
        dummy text ever since the </p>
        
    </div>
    
    <div className="box-depoimentos2">
        <img src={Mulher} alt="mulher-foto" className="img-mulher"></img>
        <h1 className="title-depoimentos">LÍGIA CAETANO</h1>
        <p className="p-depoimentos">Industry. Lorem Ipsum has<br></br>
        been the industry's standard<br></br>
        dummy text ever since the </p>
        <p className="number-depoimentos">4.951K</p>
    </div>

    <div className="box-depoimentos3">
        <img src={Mulher} alt="mulher-foto" className="img-mulher"></img>
        <h1 className="title-depoimentos">LÍGIA CAETANO</h1>
        <p className="p-depoimentos">Industry. Lorem Ipsum has<br></br>
        been the industry's standard<br></br>
        dummy text ever since the </p>
        <p className="number-depoimentos">4.951K</p>
    </div>

    <img src={MenorMaior}  alt="seta" id="depoimentos-seta"/>

    <div className="eclipse-depoimentos1"> </div>
    <div className="eclipse-depoimentos2"> </div>



    {/*  */}

    <div className="content-popping">
      <img src={Depoimentos} alt="depoimentos" />
      <img src={Computador} alt="computador-fundo" id="img-computador"/>
      <img src={MenorMaior}  alt="menor-maior" id="menor-maior"/>
      <div className="eclipse1"></div>
      <div className="eclipse2"></div>


      
        <h1 className="h1-popping">estao pipocando <br></br> resultados inacreditáveis <br></br> com os stories 10X</h1>
    </div>
    <div className="value-invest">
        <h1><span>Valor investido</span> <br></br>no gerenciador <br></br>do facebook e <br></br>google</h1>
    </div>


    {/* Text Numbers */}

    <div>
      <h1 className="title-1k">+ 1K</h1>
      <p className="p-1k">Industry. Lorem <br></br>Ipsum has.</p>
      <h1 className="title-2k">+ 2K</h1>
      <p className="p-2k">Industry. Lorem <br></br>Ipsum has.</p>
      <h1 className="title-5k">+ 5K</h1>
      <p className="p-5k">Industry. Lorem <br></br>Ipsum has.</p>
      <h1 className="title-3k">+ 3K</h1>
      <p className="p-3k">Industry. Lorem <br></br>Ipsum has.</p>
    </div>


    {/* Imagens Fundo Resultados */}

    <img src={LightFundo} alt="luz-fundo" id="luz-fundo"/>
    <img src={Graficos} alt="graficos" id="graficos" />
    <img src={LogoFundo} alt="logo-fundo" id="logo-fundo" />
    </>
  )
}

export default results