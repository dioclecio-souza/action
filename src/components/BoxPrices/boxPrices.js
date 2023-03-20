import React from 'react'
import CorrectImg from '../../images/correto.png'
import './style.css'

const boxPrices = () => {
  return (
    <div className="container text-center">
      <div><h1> Combos e Pacotes </h1></div>
        <div className="row row-cols-2">
            <div className="box">
                <h3>Nome do Pacote</h3>
                <p>MENSAL</p>
                <h1>R$ 87,89</h1>
                <hr/>
                <p className="text-box"><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <button>Saiba mais</button>
            </div>
            <div className="box">
                <h3>Nome do Pacote</h3>
                <p>MENSAL</p>
                <h1>R$ 87,89</h1>
                <hr/>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <p><img src={CorrectImg} alt="ola"></img>Aula</p>
                <button>Saiba mais</button>
            </div>
        </div>
    </div>

  )
}

export default boxPrices