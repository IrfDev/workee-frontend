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

  console.log(
    "[Query to get sources]:",
    getSources,
    "[Valid source]",
    validSource
  );

  return (
    <div className="row m-0 mt-3">
      {/* <div className="col-12 text-center">
        <h2>Streams</h2>
      </div>
      {!getSources.loading ? (
        !getSources.error && getSources.data.getProjectById.sources.streams ? (
          getSources.data.getProjectById.sources.streams[0].feedlyItems.map(
            (stream) => (
              <div key={stream.id} className="col-12 col-md-6 col-lg-4">
                <StreamCard streams={stream.items} />
              </div>
            )
          )
        ) : (
          <div className="col-12 text-center">
            <h4>Error while fetching Streams project try reloading</h4>
            <p>
              {getSources.error
                ? getSources.error.message
                : "It seems like the Feedly option is temporarly unavailable"}
            </p>
          </div>
        )
      ) : (
        <CircularProgress />
      )} */}
      <div className="col-12 text-center">
        <h2>Heros</h2>
      </div>
      {!getSources.loading ? (
        !getSources.error ? (
          getSources.data.getProjectById.sources.heroes.map(
            (hero, heroIndex) => (
              <div key={heroIndex} className="col-lg-4 col-md-5 col-12 mb-4">
                <HeroCard hero={hero} />
              </div>
            )
          )
        ) : (
          <div className="col-12 text-center">
            <h4>Error while fetching Heros projects try reloading</h4>
            <p>{getSources.error.message}</p>
          </div>
        )
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
