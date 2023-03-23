import React from 'react'
import './styles.css'

const commonQuestions = () => {
  return (
    <div className="container">
        <h1 className="title-Questions">Perguntas Frequentes</h1>
        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" 
                data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="true" aria-controls="collapseOne">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis f
                    ugit porro animi ipsa deleniti quia est itaque numquam sed quas, 
                    eaque debitis, suscipit temporibus quam eum aliquid sint dolorum at.
                    </div>
                </div>
            </div>
        </div>
        <div className="accordion" id="accordion">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" 
                data-bs-toggle="collapse" data-bs-target="#collapseOne" 
                aria-expanded="true" aria-controls="collapseOne">
                    Qual a diferença entre o plano anual e o mensal?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                    <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis f
                    ugit porro animi ipsa deleniti quia est itaque numquam sed quas, 
                    eaque debitis, suscipit temporibus quam eum aliquid sint dolorum at.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default commonQuestions