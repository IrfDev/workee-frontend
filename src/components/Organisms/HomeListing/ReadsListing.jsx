import React from "react";
import { useQuery } from "@apollo/react-hooks";

import HeroCard from "Molecules/cards/HeroCard.jsx";
import { GET_ALL_HEROS } from "GQL/queries";

export default function ReadsListing() {
  const allHeros = useQuery(GET_ALL_HEROS);

  return (
    <div className="row m-0 mt-5 mb-5">
      <div className="col-12 text-center">
        <h2>Recent heroes </h2>
      </div>
      {!allHeros.loading && allHeros.data ? (
        allHeros.data.getAllHeroes.map((hero) => (
          <div key={Math.random()} className="col-12 col-md-6 col-lg-3 mt-4">
            <HeroCard hero={hero} />
          </div>
        ))
      ) : (
        <h2>Add some heros</h2>
      )}
    </div>
  );
}
