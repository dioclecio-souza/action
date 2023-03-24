import React from 'react'



import './styles.css'

const commonQuestions = () => {
  return (

    

    <div className="container">

        {/* Title */}

        <h1 className="title-Questions">Perguntas Frequentes</h1>


        {/* Inicio  Accordion Perguntas Frequentes */}


        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                    aria-expanded="false" aria-controls="collapseOne">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br></br>
                    been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy <br></br>
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>

        <br></br>

        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" 
                    aria-expanded="false" aria-controls="collapseTwo">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br></br>
                    been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy <br></br>
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>

        <br></br>

        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" 
                    aria-expanded="false" aria-controls="collapseThree">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br></br>
                    been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy <br></br>
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>

        <br></br>

        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFor">
                    <button className="accordion-button" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseFor" 
                    aria-expanded="false" aria-controls="collapseFor">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseFor" className="accordion-collapse collapse" aria-labelledby="headingFor" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br></br>
                    been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy <br></br>
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>

        <br></br>

        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" 
                    aria-expanded="false" aria-controls="collapseFive" >
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br></br>
                    been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy <br></br>
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <br></br>
                    dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>


        {/* Final Accordion Perguntas Frequentes */}
        
        
    </div>
  )
}

export default commonQuestions