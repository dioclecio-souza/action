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
            <div className="box-left">
                <h3 className="title">Nome do Pacote</h3>
                <p className="sub-title">MENSAL</p>
                <h1 className="price"><span>R$</span>87<span>,89</span></h1>
                <hr/>
                <div className="description-prices">
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Aula semanal Ao Vivo</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>ais de 300 aulas gravadas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>ONM Shorts</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Masterclasses Exclusivas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Caixa de Ferramentas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Comunidade ONM</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>APP com aulas offline</p>
                </div>
                <button id="button">
                Saiba Mais
                </button>
            </div>
            <div className="box-right">
                <h3 className="title">Nome do Pacote</h3>
                <p className="sub-title">MENSAL</p>
                <h1 className="price"><span>R$</span>87<span>,89</span></h1>
                <hr/>
                <div className="description-prices">
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Aula semanal Ao Vivo</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Mais de 300 aulas gravadas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>ONM Shorts</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Masterclasses Exclusivas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Caixa de Ferramentas</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>Comunidade ONM</p>
                  <p><img src={CorrectImg} alt="correct" className="correct"></img>APP com aulas offline</p>
                </div>
                <button id="button">
                Saiba Mais
                </button> 
            </div>
        </div>
    </div>

  )
}

export default boxPrices