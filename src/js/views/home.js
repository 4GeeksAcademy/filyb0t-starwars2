import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getCharacters();
    actions.getPlanets();
  }, []);

  // Filtra los planetas para eliminar duplicados
  const uniquePlanets = store.planets.filter(
    (planet, index, self) =>
      index === self.findIndex((p) => p.uid === planet.uid)
  );

  return (
    <div className="text-center mt-5">
      <h1 className="star-wars-title">Characters and Planets</h1>
      <Container>
        <Row className="mb-4">
          <Col>
            <div style={{ width: "100%", overflowX: "scroll", whiteSpace: "nowrap" }}>
              {store.characters.map((item) => (
                <Card key={item._id} style={{ width: "18rem", display: "inline-block", marginRight: "20px" }}>
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
                    <Link to={`/characters/${item.uid}`} className="btn btn-primary">
                      Learn more!
                    </Link>
                    <button onClick={() => actions.addFavorite(item)} className="btn btn-warning ml-2">
                      Add to Favorites
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <div style={{ width: "100%", overflowX: "scroll", whiteSpace: "nowrap" }}>
              {uniquePlanets.map((planet) => (
                <Card key={planet.uid} style={{ width: "18rem", display: "inline-block", marginRight: "20px" }}>
                  <img
                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                    className="card-img-top"
                    alt={planet.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{planet.name}</h5>
                    <p className="card-text">
                      <strong>Climate: {planet.climate}</strong>
                    </p>
                    <p className="card-text">
                      <strong>Population: {planet.population}</strong>
                    </p>
                    <Link to={`/planets/${planet.uid}`} className="btn btn-primary">
                      Learn more!
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
