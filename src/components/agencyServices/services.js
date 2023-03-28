import React from 'react'
import './services.css'
import trafego from '../../assets/lancar.png'
import social from '../../assets/compartilhar.png'
import video from '../../assets/video.png'
import copy from '../../assets/renomear.png'
import designer from '../../assets/design-grafico.png'

const services = () => {
  return (
    <>
    <h1 className="title-services">Serviços</h1>
    <div className="container">
        <div className="box-trafego">
            <img src={trafego} alt="gestor-de-trafego" className="img-services"></img>
            <p className="box-title">GESTAO DE TRÁFEGO</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
        <div className="box-social">
            <img src={social} alt="social-media" className="img-services"></img>
            <p className="box-title">SOCIAL MEDIA</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
        <div className="box-video">
            <img src={video} alt="video" className="img-services"></img>
            <p className="box-title">VIDEO MAKER</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
        <div className="box-copy">
            <img src={copy} alt="copywriter" className="img-services"></img>
            <p className="box-title">COPYWRITER</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
        <div className="box-designer">
            <img src={designer} alt="designer-grafico" className="img-services"></img>
            <p className="box-title">DESIGNER GRÁFICO</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
        <div className="box-web">
            <img src={trafego} alt="web-designer" className="img-services"></img>
            <p className="box-title">WEB DESIGNER</p>
            <p className="services-description">Industry. lorem ipsum has <br></br> been the industry's standard <br></br>dummy text ever since the</p>
        </div>
    </div>
    </>
  )
}

export default services