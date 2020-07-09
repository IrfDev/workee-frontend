import React from "react";
import StreamCard from "../../Molecules/cards/StreamCard.jsx";
import HeroCard from "../../Molecules/cards/HeroCard.jsx";

export default function Source(props) {
  const validSource = (resources) =>
    resources && resources.length ? true : false;
  console.log("[Props inside source:]", props);
  return (
    <>
      <h1>Streams</h1>
      {validSource(props.streams) ? (
        props.streams.map((stream) => (
          <>
            <h5>{stream.feedlyItems.items[0].categories[0].label}</h5>
            <StreamCard streams={stream.feedlyItems.items} key={stream.id} />
          </>
        ))
      ) : (
        <h1>Add some streams to your project</h1>
      )}
      <h2>Heros</h2>
      {validSource(props.heros) ? (
        props.heros.map((hero) => <HeroCard hero={hero} key={Math.random()} />)
      ) : (
        <h1>Add some heros</h1>
      )}
    </>
  );
}
