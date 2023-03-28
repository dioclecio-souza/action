import React from 'react'
import './method.css'
import Image from '../../assets/ponto-a-b.png'
import Balltop from '../../assets/bola.png'
import Balllow from '../../assets/ball2.png'

const agencyMethodology = () => {
  return (
    <div className="container">
        <h1 className="method-title">Metodologia da agencia</h1>

            {/* Inicio Metodologia da Agencia */}

          <div>
            <div>
              <img src={Image} alt="ponto-ab" className="img-point-ab"/>
              <img src={Balltop} alt="bolinha" className="bolaTop"/>
              <img src={Balllow} alt="bolinha" className="bolaLow" />
            </div>


            <div className="method-01">
              <h1 className="number-1">1</h1>
              <h2 className="title-method1">Método 01</h2>
              <p className="desc-method1">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>


            <div className="method-02">
              <h1 className="number-2">2</h1>
              <h2 className="title-method2">Método 02</h2>
              <p className="desc-method2">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>


            <div className="method-03">
              <h1 className="number-3">3</h1>
              <h2 className="title-method3">Método 03</h2>
              <p className="desc-method3">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>
        </div>

        <div>
          <div>
            <img src={Image} alt="ponto-ab" className="img-point-ab-right"/>
            <img src={Balltop} alt="bolinha" className="bolaTop-right"/>
            <img src={Balllow} alt="bolinha" className="bolaLow-right" />
          </div>

          <div className="method-04">
              <h1 className="number-4">4</h1>
              <h2 className="title-method4">Método 04</h2>
              <p className="desc-method4">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>


            <div className="method-05">
              <h1 className="number-5">5</h1>
              <h2 className="title-method5">Método 05</h2>
              <p className="desc-method5">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>


            <div className="method-06">
              <h1 className="number-6">6</h1>
              <h2 className="title-method6">Método 06</h2>
              <p className="desc-method6">Ipsum has benn the industry's standard 
                <br></br> dummy text ever since the been the 
                <br></br>industry's standard
                dummy text ever.
              </p>
            </div>

        </div>


    </div>
  )
}

export default agencyMethodology