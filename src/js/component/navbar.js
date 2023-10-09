import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store } = useContext(Context)
  return (
    <nav className="navbar navbar-light bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-light">StarWars</span>
        </Link>
        <div className="ml-auto">
          <div className="dropdown ">
            <button
              className="btn btn-danger dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites {store.favorites.length}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {
                store.favorites.map((item) => {
                  return (
                    <li key={item._id}>
                      <a className="dropdown-item" href="#">
                        {item.properties.name}
                      </a>
                    </li>
                  )
                })
              }
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
