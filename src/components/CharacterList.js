import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [ characters, setCharacters ] = useState(null);
  const [ url, setUrl ] = useState({
    currentUrl: "https://rickandmortyapi.com/api/character/?page=1"
  })

  useEffect(() => {
    
    fetch(url.currentUrl)
    .then(response => response.json())
    .then(data => {
      setUrl(data.info)
      setCharacters(data.results)
    })

  }, [url]);

  if (!characters) return (
    <p>Loading...</p>
  )
  
  console.log('url --> ', url);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      
      {url && url.prev ? (
        <button onClick={() => setUrl({
          ...url,
          currentUrl: url.prev,
        })} >prev</button>

      ) : null}

      <button onClick={() => setUrl({
        ...url,
        currentUrl: url.next,
      })} >next</button>

      {characters.map(character => (
        <CharacterCard character={character} url={url} setUrl={setUrl} />
      ))}
    </section>
  );
}
