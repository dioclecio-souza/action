import React from 'react'
import './time.css'
import ImgPerson1 from '../../assets/homem1.png'
import ImgPerson2 from '../../assets/homem2.png'
import ImgPerson3 from '../../assets/homem3.png'

const time = () => {
  return (
    <div>
        <h1 className="title-time">Nosso Time</h1>
        <div className="box1">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>
        <div className="box2">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>
        <div className="box3">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>
        <div className="box4">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>
        <div className="box5">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>
        <div className="box6">
            <h2 className="title-box">DIEGO NOVAES</h2>
            <p className="p-box">Função Interna</p>
        </div>

        <div>
            <img src={ImgPerson1} alt="homem1" className="img-person1"/>
            <h2>DIEGO NOVAES</h2>
            <p>Funçao Interna</p>

            <img src={ImgPerson2} alt="homem2" className="img-person2"/>
            <h2>DIEGO NOVAES</h2>
            <p>Função Interna</p>

            <img src={ImgPerson3} alt="homem3" className="img-person3"/>
            

            <img src={ImgPerson1} alt="homem1" className="img-person4"/>
            <h2>DIEGO NOVAES</h2>
            <p>Funçao Interna</p>

            <img src={ImgPerson2} alt="homem2" className="img-person5"/>
            <h2>DIEGO NOVAES</h2>
            <p>Funçao Interna</p>

            <img src={ImgPerson3} alt="homem3" className="img-person6"/>
            <h2>DIEGO NOVAES</h2>
            <p>Funçao Interna</p>
        </div>

    </div>
  )
}

export default time