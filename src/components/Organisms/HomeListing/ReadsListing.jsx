import React from "react";
import { useQuery } from "@apollo/react-hooks";

import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";

import HeroCard from "Molecules/cards/HeroCard.jsx";
import { GET_ALL_HEROS } from "GQL/queries";

export default function ReadsListing() {
  const allHeros = useQuery(GET_ALL_HEROS);

  return (
    <Grid container>
      <List>
        <h1>Reads</h1>
        {!allHeros.loading && allHeros.data ? (
          allHeros.data.getAllHeroes.map((hero) => (
            <HeroCard hero={hero} key={Math.random()} />
          ))
        ) : (
          <h1>Add some heros</h1>
        )}
      </List>
    </Grid>
  );
}
