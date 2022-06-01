import React from "react";
import { InfoVendedor } from "../InfoVendedor";
import { Container, Panel, Column, Galeria, Description, Section} from "./styles";
import { ProductoVenta } from "../ProductoVenta";
export const Producto = () => {
  return (
    <Container>
      <Panel>
        <Column>
          <Galeria>
              <img src="https://http2.mlstatic.com/D_NQ_NP_811838-MLA41372451107_042020-O.webp" alt=""/>
          </Galeria>
          <Info/>
        </Column>
        <Column>
            <ProductoVenta/>
            <InfoVendedor/>
            <Garantia/>
        </Column>
      </Panel>
    </Container>
  );
};

const Info = () => {
    return (
        <Description>
            <h4>Descripcion</h4>
            <p>
            <span>AURICULARES RAZEN</span>
            <br/><br/>
            <span>LIGERO Y COMODO</span>
            <br/><br/>
            El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.
            <br/><br/>
            El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.
            <br/><br/>
            <span>PENSADO PARA VOS</span>
            <br/><br/>
            ¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Kraken no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.
            </p>
        </Description>
    )

}

const Garantia = () => {
    return (
        <Section>
            <h5>Garantía</h5>
            <div>
                <span>
                    <p className="title">Compra Protegida con Mercado Pago</p>
                    <p className="description">Recibe el producto que esperabas o te devolvemos tu dinero</p>
                </span>
            
                <span>
                    <p className="title">Garantia del vendedor</p>
                    <p className="description">Garantia del vendedor: 6 meses</p>
                </span>
                <a href="#">Conocer más sobre garantía</a>
            </div>
        </Section>
    )
}