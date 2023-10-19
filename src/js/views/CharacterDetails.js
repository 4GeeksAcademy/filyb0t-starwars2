import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const CharacterDetails = () => {
  const { store } = useContext(Context);
  const { characterId } = useParams();

  
  const character = store.characters.find((character) => character._id === characterId);

  if (!character) {
    return <div>Personaje no encontrado.</div>;
  }

  return (
    <div>
      <h2>Detalles del Personaje</h2>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
        alt={character.properties.name}
      />
      <h3>{character.properties.name}</h3>
      <p><strong>Género: {character.properties.gender}</strong></p>
      <p><strong>Color de pelo: {character.properties.hair_color}</strong></p>
      <p><strong>Color de ojos: {character.properties.eye_color}</strong></p>
      {}
    </div>
  );
};

export default CharacterDetails;
