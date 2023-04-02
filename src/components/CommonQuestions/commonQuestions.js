import React from 'react'
import FundoQuestions from '../../assets/fundo-questions.png'


import './questions.css'

const commonQuestions = () => {
  return (

    

    <div className="container justify-content-center">

        {/* Title */}

        <h1 className="title-Questions">Perguntas Frequentes</h1>


        {/* Inicio   Perguntas Frequentes */}


        <div className="boxQuestionsOne">
            <h1 className="box-headerOne">Qual a diferença entre o plano Anual e Mensal?</h1>
            <p className="questions-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has<br></br>
            been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy<br></br>
            text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard<br></br>
            dummy text ever since the 1500s,</p>
        </div>

        <div className="boxQuestionsTwo">
            <h1 className="box-headerOne">Qual a diferença entre o plano Anual e Mensal?</h1>
        </div>

        <div className="boxQuestionsThree">
            <h1 className="box-headerOne">Qual a diferença entre o plano Anual e Mensal?</h1>
        </div>

        <div className="boxQuestionsFor">
            <h1 className="box-headerOne">Qual a diferença entre o plano Anual e Mensal?</h1>
        </div>

        <div className="boxQuestionsFive">
            <h1 className="box-headerOne">Qual a diferença entre o plano Anual e Mensal?</h1>
        </div>



        <img src={FundoQuestions} alt="fundo" className="fundo-questions"/>

        {/* Final  Perguntas Frequentes */}
        
        
    </div>
  )
}

export default commonQuestions