import React from 'react'

import './whoIs.css'

import Imobiliaria from '../../assets/imobiliaria.png'
import Corretor from '../../assets/corretor.png'
import Medico from '../../assets/medico.png'
import Dentista from '../../assets/dentista.png'
import Nutricionista from '../../assets/nutricionista.png'
import Emprestimo from '../../assets/emprestimo.png'

const paraQuem = () => {
  return (
    <>

    <img src={Imobiliaria} alt="imobiliaria" className="imobiliaria-img"/>
    <img src={Corretor} alt="imobiliaria" className="corretor-img"/>
    <img src={Medico} alt="imobiliaria" className="medico-img"/>
    <img src={Dentista} alt="imobiliaria" className="dentista-img"/>
    <img src={Nutricionista} alt="imobiliaria" className="nutricionista-img"/>
    <img src={Emprestimo} alt="imobiliaria" className="emprestimo-img"/>


    <h1 className="content-titleWhoIs">Para quem é</h1>

    <div>
      <div className="box-imob">
        <h3 className="title-imob">Imobiliaria</h3>
        <p className="desc-imob">Industry. Lorem Ipsum has <br></br>
          been the industry's standard <br></br>
          dummy text ever since the </p>
      </div>

  
      <div className="box-corr">
        <h3 className="title-corr">Corretor de Imóveis</h3>
        <p className="desc-corr">Industry. Lorem Ipsum has <br></br>
          been the industry's standard <br></br>
          dummy text ever since the </p>
      </div>

      <div className="box-med">
        <h3 className="title-med">Médico</h3>
        <p className="desc-med">Industry. Lorem Ipsum has <br></br>
          been the industry's standard <br></br>
          dummy text ever since the </p>
      </div>

      <div className="box-dent">
        <h3 className="title-dent">Dentista</h3>
        <p className="desc-dent">Industry. Lorem Ipsum has <br></br>
          been the industry's standard <br></br>
          dummy text ever since the </p>
        </div>
      
        <div className="box-nutri">
          <h3 className="title-nutri">Nutricionista</h3>
          <p className="desc-nutri">Industry. Lorem Ipsum has <br></br>
            been the industry's standard <br></br>
            dummy text ever since the </p>
        </div>
      
        <div className="box-empres">
          <h3 className="title-empres">Empréstimo Consignado</h3>
          <p className="desc-empres">Industry. Lorem Ipsum has <br></br>
           been the industry's standard <br></br>
            dummy text ever since the </p>
        </div>

      <button  id="content-buttonWhoIS">Quero começar agora</button>
    </div>
    </>
  )
}

export default paraQuem