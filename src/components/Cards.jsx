import React, { useState, useEffect } from "react";

export default function Cards() {
  const [data, setData] = useState([]);

  async function getData() {
    let api = "https://swapi.dev/api/starships/";
    let response = await fetch(api);
    let card = await response.json();
    setData(card.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      {data.map((element) => (
      <div className="card">
        <h1 key={element.name}>{element.name}</h1>
      </div>
      ))}
    </div>
  );
}

