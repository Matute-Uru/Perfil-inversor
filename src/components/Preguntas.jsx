import React from 'react';

function Preguntas(props) {
    if (props.preguntas !== undefined && props.preguntas.length > 0) {
        const preguntas = props.preguntas.map(function (valor) {
            return <preguntas titulo={valor.titulo}/>;
        });

        return (
            <ul id="preguntas">
                {preguntas}
            </ul>
            );
    }
    
}

export default Preguntas;


