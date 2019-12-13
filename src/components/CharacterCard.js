import React from "react";


const CharacterCard = props => {
  const { character } = props;

  return (
    <section className="section--character-card">
      
      <div>
        <h3>{character.name}</h3>
        <p>{character.gender}</p>
        <p>{character.species} <i>({character.type})</i> </p>
        <p></p>
        <p>STATUS: {character.status}</p>
      </div>
      <img src={character.image} alt={character.name} />
    </section>
  )
}


export default CharacterCard

