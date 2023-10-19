import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [updateView, setUpdateView] = useState(false);
const removeFromFavorites = (item) => {
    actions.removeFavorite(item);
   
    setUpdateView(!updateView);
  };

  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-light">StarWars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {store.favorites.map((item) => (
                <li key={item._id}>
                  <div className="d-flex justify-content-between">
                    <Link to={`/characters/${item._id}`} className="dropdown-item">
                      {item.properties.name}
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromFavorites(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
