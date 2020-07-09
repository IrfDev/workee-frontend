import React from "react";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import HeroCard from "../../Molecules/cards/HeroCard.jsx";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function ReadsListing(props) {
  const validSource = (resources) =>
    resources && resources.length ? true : false;

  const GET_ALL_HEROS = gql`
    query {
      getAllHeroes {
        id
        tags
        name
        links {
          name: website
          url: urlLink
        }
      }
    }
  `;

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
