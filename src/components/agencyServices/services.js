import React from 'react'
import './services.css'
import trafego from '../../images/lancar.png'
import social from '../../images/compartilhar.png'
import video from '../../images/video.png'
import copy from '../../images/renomear.png'
import designer from '../../images/design-grafico.png'

const services = () => {
  return (
    <div className="container text-center">
        <h1> Serviços</h1>
        <div className="row row-cols-3">
            <div className="service-box">
                <img src={trafego} alt="gestor-de-trafego"></img>
                <p className="services-tittle">GESTAO DE TRÁFEGO</p>
                <p className="services-description" style={{color: "red"}}>Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
            <div className="service-box">
                <img src={social} alt="social-media"></img>
                <p className="services-tittle">SOCIAL MEDIA</p>
                <p className="services-description">Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
            <div className="service-box">
                <img src={video} alt="video-maker"></img>
                <p className="services-tittle">VIDEO MAKER</p>
                <p className="services-description">Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
            <div className="service-box">
                <img src={copy} alt="copywriter"></img>
                <p className="services-tittle">COPYWRITER</p>
                <p className="services-description">Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
            <div className="service-box">
                <img src={designer} alt="designer-grafico"></img>
                <p className="services-tittle">DESIGNER GRÁFICO</p>
                <p className="services-description">Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
            <div className="service-box">
                <img src={""} alt="designer-web"></img>
                <p className="services-tittle">DESIGNER WEB</p>
                <p className="services-description">Industry. lorem ipsum has been the industry's standard dummyt text ever since the</p>
            </div>
        </div>
    </div>
  )
}

export default services