import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      state.actions.getCharacters();
      state.actions.getPlanets();
    }, []);

  
    const removeFavorite = (item) => {
      const updatedFavorites = state.store.favorites.filter((favorite) => favorite._id !== item._id);
      state.actions.setStore({ favorites: updatedFavorites });
    };

 
    state.actions.removeFavorite = removeFavorite;

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
