import React from "react";
import {
  Container,
  Estado,
  Row,
  HeartIcon,
  Card,
  CheckIcon,
  Price,
  Color,
  Cantidad,
  ButtonCard,
  Button,
  Beneficios,
  ShieldIcon,
  CopaIcon,
} from "./styles";

export const ProductoVenta = () => {
  return (
    <Container>
      <Estado>Nuevo | 4 vendidos</Estado>
      <Row>
        <h1>Auriculares gamer Razer Kraken classic black</h1>
        <HeartIcon />
      </Row>
      <Price>$95.500</Price>
      <Card>
        <CheckIcon />
        <div>
          <span className="title">Lega gratis mañana</span>
          <span className="detalle">Beneficio Mercado Puntos</span>
          <a href="#" className="more">Ver más formas de entrega</a>
        </div>
      </Card>
      <Color>
        Color: <strong>Negro / Rojo</strong>
      </Color>
      <Color>
        Color de la luz: <strong>Verde</strong>
      </Color>
      <Cantidad>
        <p>Cantidad:</p>
        <strong>1 unidad</strong>
        <input type="number" value=""></input>
        <span>(7 disponibles)</span>
      </Cantidad>
      <ButtonCard>
        <Button className="solid">Comprar Ahora</Button>
        <Button>Agregar al carrito</Button>
      </ButtonCard>

      <Beneficios>
      
        <li>
        <ShieldIcon />
          <p>Compra Protegida,
            <span>
              recibe el producto que esperabas o te devolvemos el dinero.
            </span>
          </p>
        </li>
        <li>
          <CopaIcon />
          <p>
            Mercado Puntos. <span> Sumas 47 puntos.</span>
          </p>
        </li>
      </Beneficios>
    </Container>
  );
};
