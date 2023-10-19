import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = () => {
  const { store } = useContext(Context);
  const { planetId } = useParams();


  const planet = store.planets.find((planet) => planet._id === planetId);

  if (!planet) {
    return <div>Planeta no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalles del Planeta</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
        alt={planet.properties.name}
      />
      <h3>{planet.properties.name}</h3>
      <p><strong>Población: {planet.properties.population}</strong></p>
      <p><strong>Territorio: {planet.properties.terrain}</strong></p>
      {}
    </div>
  );
};

export default PlanetDetails;
