import React from "react";
import {Container, Row} from "./styles";

export const Hero = () => {
    return(
        <Container>
          <Row>
            <a href="#" className="volver">Volver al Listado</a>
            <a href="#">Computacion</a>
            <a href="#">Accesorios para PC</a>
            <a href="#">Microfonos</a>
            <a href="#">Redragon</a>
           
          </Row>
          <Row>
              <a href="#">Compartir</a>
              <a href="#">Vender una igual</a>
          </Row>
          
        </Container>
    )
}