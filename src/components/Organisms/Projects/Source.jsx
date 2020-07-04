import React from "react";
import StreamCard from "../../Molecules/cards/StreamCard.jsx";
import HeroCard from "../../Molecules/cards/HeroCard.jsx";

export default function Source(props) {
  return (
    <>
      <h1>Streams</h1>
      <StreamCard streams={props.streams} />
      <h2>Heros</h2>
      {props.heros.map((hero) => (
        <HeroCard hero={hero} key={Math.random()} />
      ))}
    </>
  );
}
