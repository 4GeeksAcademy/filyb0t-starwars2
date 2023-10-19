import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [updateView, setUpdateView] = useState(false);
 useEffect(() => {
    
  }, [updateView]);
 const addToFavorites = (item) => {
    actions.addFavorite(item);
  setUpdateView(!updateView);
  };

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="text-danger">Characters</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          {store.characters.map((item) => (
            <div key={item._id} className="carousel-card">
              <div className="carousel-card-content">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
                  alt={item.properties.name}
                />
                <h3>{item.properties.name}</h3>
                <p>
                  <strong>Gender: {item.properties.gender}</strong>
                </p>
                <p>
                  <strong>Hair color: {item.properties.hair_color}</strong>
                </p>
                <p>
                  <strong>Eye-Color: {item.properties.eye_color}</strong>
                </p>
              </div>
              <div className="carousel-card-actions">
                <Link to={`/characters/${item._id}`} className="btn btn-outline-primary">
                  Learn more!
                </Link>
                <button onClick={() => addToFavorites(item)} className="btn btn-outline-warning">
                  Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-5">
        <h1 className="text-danger">Planets</h1>
      </div>
      <div className="carousel-container">
        <div className="carousel">
          {store.planets.map((item) => (
            <div key={item._id} className="carousel-card">
              <div className="carousel-card-content">
                <img
                  src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
                  alt={item.properties.name}
                />
                <h3>{item.properties.name}</h3>
                <p>
                  <strong>Population: {item.properties.population}</strong>
                </p>
                <p>
                  <strong>Terrain: {item.properties.terrain}</strong>
                </p>
              </div>
              <div className="carousel-card-actions">
                <Link to={`/planets/${item._id}`} className="btn btn-outline-primary">
                  Learn more!
                </Link>
                <button onClick={() => addToFavorites(item)} className="btn btn-outline-warning">
                  Add to Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
