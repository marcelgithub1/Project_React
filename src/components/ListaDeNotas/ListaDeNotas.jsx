import React, { Component } from "react";
import CardNota from "../CardNota/index.js";
import "./estilo.css";

class ListaDeNotas extends Component{

    render(){
        return(
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li key={index} className="lista-notas_item animate__zoomIn">
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
                        </li>
                    );
                })}                
            </ul>
        );
    }    
}

export default ListaDeNotas;