import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { NEW_HERO, PUSH_NEW_SOURCE } from "GQL/mutations";
import { GET_SOURCES_PROJECT } from "GQL/queries";

import SwitchContent from "Molecules/Forms/SwitchContent/NewSourceContent.jsx";

export default function SourceNewResource(props) {
  const [previousState, setState] = useState({
    activeResource: "Hero",
    newLinkName: "",
    newLinkUrl: "",
    tags: [],
    heroLinks: [],
    newTagInput: "",
    newHeroLinkInput: "",
    newHeroLinkNameInput: "",
    streams: [],
    hero: {},
  });
  // Handle activeResource select

  const handleActiveResource = (e) => {
    e.persist();
    setState({ ...previousState, activeResource: e.target.value });
  };

  const [createHero] = useMutation(NEW_HERO);

  const [pushNewSource] = useMutation(PUSH_NEW_SOURCE);

  // const normalizedStreamIds = () => {
  //   const streamIds = previousState.streams.map((stream) => stream.id);
  //   return setState({ ...previousState, streamIds });
  // };

  const handleNewSource = async () => {
    switch (previousState.activeResource) {
      case "Hero":
        await createHero({
          variables: {
            name: previousState.hero.name,
            tags: previousState.tags,
            links: previousState.heroLinks,
          },
        }).then(async (response) => {
          let heroId = response.data.createHeroe.data.id;

          await pushNewSource({
            variables: {
              id: props.activeProject,
              target: "sources.heroes",
              data: heroId,
            },
            refetchQueries: [
              {
                query: GET_SOURCES_PROJECT,
                variables: {
                  id: props.activeProject,
                },
              },
            ],
          });
        });

        return props.handleForm();

      // case "Stream":
      //   normalizedStreamIds();

      //   await createStream({
      //     variables: {
      //       feedlyStreamsid: previousState.streamIds,
      //       tags: previousState.tags,
      //     },
      //   }).then(async (response) => {
      //     let streamId = response.data.createStream.data.id;

      //     await pushNewSource({
      //       variables: {
      //         id: props.activeProject,
      //         target: "sources.streams",
      //         data: streamId,
      //       },
      //     });
      //   });

      //   return props.handleForm();

      default:
        break;
    }
  };

  return (
    <form>
      <h5>Selecciona el recurso que quieres agregar</h5>
      <FormControl variant="filled" fullWidth={true}>
        <InputLabel id="trello-list-input">Recurso</InputLabel>
        <Select
          labelId="hero-list-input"
          id="hero-list-inputs"
          value={previousState.activeResource}
          onChange={handleActiveResource}
          autoWidth={true}
        >
          {/* <MenuItem value={"Stream"}>Stream</MenuItem> */}
          <MenuItem value={"Hero"}>Hero</MenuItem>
        </Select>
      </FormControl>
      <div className="form-content">
        <SwitchContent setState={setState} previousState={previousState} />
      </div>
      <Button
        className="mt-5"
        onClick={handleNewSource}
        variant="contained"
        color="primary"
      >
        Enviar formulario
      </Button>
    </form>
  );
}
