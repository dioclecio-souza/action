import React from 'react'
import CorrectImg from '../../images/correto.png'
import './style.css'

const boxPrices = () => {
  return (
    <div className="container text-center">
      <div>
        <h1 className="combos"> Combos e Pacotes </h1>
      </div>
        <div className="row row-cols-2">
            <div className="box">
                <h3 className="title">Nome do Pacote</h3>
                <p className="sub-title">MENSAL</p>
                <h1 className="price"><span>R$</span>87<span>,89</span></h1>
                <hr/>
                <p className="text-box"><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <button id="button">
                Saiba Mais
                </button>
            </div>
            <div className="box">
                <h3 className="title">Nome do Pacote</h3>
                <p className="sub-title">MENSAL</p>
                <h1 className="price"><span>R$</span>87<span>,89</span></h1>
                <hr/>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <button id="button">
                Saiba Mais
                </button> 
            </div>
        </div>
    </div>

  )
}

export default boxPrices