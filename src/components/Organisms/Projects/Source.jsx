import React from "react";
import { useQuery } from "@apollo/react-hooks";

import StreamCard from "Molecules/cards/StreamCard.jsx";
import HeroCard from "Molecules/cards/HeroCard.jsx";

import { GET_SOURCES_PROJECT } from "GQL/queries";
import { CircularProgress } from "@material-ui/core";

export default function Source(props) {
  const validSource = (resources) =>
    resources && resources.length ? true : false;

  const getSources = useQuery(GET_SOURCES_PROJECT, {
    variables: {
      id: props.activeProject,
    },
  });

  console.log(getSources);

  return (
    <>
      <h1>Streams</h1>
      {!getSources.loading ? (
        !getSources.error ? (
          getSources.data.getProjectById.sources.streams[0].feedlyItems.map(
            (stream) => <StreamCard streams={stream.items} key={stream.id} />
          )
        ) : (
          <div>
            <h1>Error while fetching Streams project try reloading</h1>
            <p>{getSources.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
      <h2>Heros</h2>
      {!getSources.loading ? (
        !getSources.error ? (
          getSources.data.getProjectById.sources.heroes.map((hero) => (
            <HeroCard hero={hero} key={Math.random()} />
          ))
        ) : (
          <div>
            <h1>Error while fetching Heros project try reloading</h1>
            <p>{getSources.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
