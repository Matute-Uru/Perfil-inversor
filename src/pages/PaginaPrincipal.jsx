import React from 'react';
import {preguntas, perfiles} from '../data/preguntas';
import '../App.css';

class PaginaPrincipal extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      resultados:  preguntas.map(function(p){ return 0}),
      total: 0, 
    };

    this.handleChange = this.handleChange.bind(this);
    this.calcularResultado = this.calcularResultado.bind(this);
  }

  handleChange(e, idx) {
    const {resultados} = {...this.state};
    resultados[idx] = e.target.value;
    this.setState({...this.state, resultados});
  }

  calcularResultado() {
    console.log("CALC RESULT")
    const {resultados} = {...this.state};
    const total = resultados.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    this.setState({...this.state, total});
  }

  render(){

    const {total} = this.state;


      let perfil = 'Conservador';

      if ( total >= 37 ) {
        if ( total >= 49 ) {
          perfil = 'Arriesgado';
        } else {
          perfil = 'Moderado';
        }
      }

      return (
        <main>
          { (this.state.total === 0 ) &&
          <div>
            <h1>Perfil Inversor</h1>
            <div>


            {
              
              
              preguntas.map(  (p, pIdx) => {
                return (
                  <div key={pIdx} className="pregunta">
                    <h4><label htmlFor={`question-${pIdx}`}>{p.pregunta}</label></h4>
                    <select name={`question-${pIdx}`} id={`question-${pIdx}`} onChange={(e) => {this.handleChange(e, pIdx)}}>
                      <option value="0" >Seleccionar...</option>
                      {
                        p.respuestas.map((respuesta, rIdx) => {
                          return <option key={`question-${pIdx}-${rIdx}`} value={respuesta.value}>{respuesta.text}</option>
                        })
                      }
                    </select>
                  </div>  
                )
              })

            }
              

              {<button id="Calcular-Perfil" onClick={this.calcularResultado}>Calcular Perfil</button>}
            </div>
          </div>
          }
          { ( this.state.total > 0 ) && 
            <div>
              <h2>RESULTADOS! </h2>

              <div className="resultado">
                <h3>{perfil}</h3>

                <p>{perfiles[ perfil ]}</p>
              </div>
            </div>
          }
        </main>
      )
  }
};

export default PaginaPrincipal;
