import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Carousel, Card } from "react-bootstrap";

export const Home = () => {
  const { store, actions } = useContext(Context);

  // Función para generar una fila de carruseles
  const generateCarouselRow = (startIndex, endIndex) => (
    <Carousel style={{ maxWidth: "600px", width: "80%" }}>
      {store.characters.slice(startIndex, endIndex).map((item) => (
        <Carousel.Item key={item._id}>
          <div className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "18rem" }}>
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.properties.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.properties.name}</h5>
                <p className="card-text">
                  <strong>Gender: {item.properties.gender}</strong>
                </p>
                <p className="card-text">
                  <strong>Hair color: {item.properties.hair_color}</strong>
                </p>
                <p className="card-text">
                  <strong>Eye-Color: {item.properties.eye_color}</strong>
                </p>
                <Link to={`/characters/${item._id}`} className="btn btn-primary">
                  Learn more!
                </Link>
                <button onClick={() => actions.addFavorite(item)} className="btn btn-warning ml-2">
                  Add to Favorites
                </button>
              </div>
            </Card>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );

  // Crear filas de carruseles
  const upperCarouselRows = [
    generateCarouselRow(0, 3),
    generateCarouselRow(3, 6),
    generateCarouselRow(6, 9),
  ];

  return (
    <div className="text-center mt-5">
      {/* Título con estilo Star Wars */}
      <h1 className="star-wars-title">Characters</h1>

      {/* Contenedor principal con carruseles alineados horizontalmente */}
      <div className="d-flex justify-content-between">
        {upperCarouselRows}
      </div>
    </div>
  );
};
