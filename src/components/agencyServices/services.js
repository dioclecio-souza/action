import React from 'react'
import './services.css'
import trafego from '../../assets/lancar.png'
import social from '../../assets/compartilhar.png'
import video from '../../assets/video.png'
import copy from '../../assets/renomear.png'
import designer from '../../assets/design-grafico.png'

const services = () => {
  return (
    <div className="container">
        <h1 id="services"> Serviços</h1>
        <div className="row row-cols-3">
            <div className="service-box col">
                <img src={trafego} alt="gestor-de-trafego" className="img-services"></img>
                <p className="services-tittle">GESTAO DE TRÁFEGO</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
            <div className="service-box col">
                <img src={social} alt="social-media"  className="img-services"></img>
                <p className="services-tittle">SOCIAL MEDIA</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
            <div className="service-box col">
                <img src={video} alt="video-maker" className="img-services" ></img>
                <p className="services-tittle">VIDEO MAKER</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
            <div className="service-box col">
                <img src={copy} alt="copywriter" className="img-services"></img>
                <p className="services-tittle">COPYWRITER</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
            <div className="service-box col">
                <img src={designer} alt="designer-grafico"className="img-services"></img>
                <p className="services-tittle">DESIGNER GRÁFICO</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
            <div className="service-box col">
                <img src={""} alt="designer-web" className="img-services"></img>
                <p className="services-tittle">DESIGNER WEB</p>
                <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
            </div>
        </div>
    </div>
  )
}

export default services