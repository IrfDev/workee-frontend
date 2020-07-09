import React, { useState } from "react";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Chip from "@material-ui/core/Chip";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import TagInput from "../../../Atoms/forms/TagsResourceInput.jsx";

import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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
  const handleTitleInput = (e) => {
    e.persist();
    setState({ ...previousState, hero: { name: e.target.value } });
  };

  const handleActiveResource = (e) => {
    e.persist();
    setState({ ...previousState, activeResource: e.target.value });
  };

  const handleStreamResource = (e) => {
    e.persist();
    const streamArray = previousState.streams;
    const newStream = e.target.value;
    streamArray.push(newStream);
    setState({
      ...previousState,
      streams: streamArray,
    });
  };

  const addLink = () => {
    const linksArray = previousState.heroLinks;
    const newLink = {
      website: previousState.newHeroLinkInput,
      urlLink: previousState.newLinkName,
    };
    linksArray.push(newLink);
    setState({
      ...previousState,
      heroLinks: linksArray,
      newHeroLinkInput: "",
      newLinkName: "",
    });
  };

  const deleteLink = (newTag) => {
    const tags = previousState.heroLinks;
    const tagsWithoutDeletedTag = tags.filter((tag) => tag.website !== newTag);
    setState({
      ...previousState,
      heroLinks: tagsWithoutDeletedTag,
      newHeroLinkInput: "",
    });
  };

  const deleteStream = (previousStream) => {
    const stream = previousState.streams;
    const filterStream = stream.filter(
      (stream) => stream.id !== previousStream
    );
    setState({
      ...previousState,
      streams: filterStream,
      newTagInput: "",
    });
  };

  const newHeroLinkInput = (e) => {
    e.persist();
    setState({
      ...previousState,
      newHeroLinkInput: e.target.value,
    });
  };

  const newHeroLinkNameInput = (e) => {
    e.persist();
    setState({
      ...previousState,
      newLinkName: e.target.value,
    });
  };

  const NEW_HERO = gql`
    mutation CreateHero(
      $name: String!
      $tags: [String!]
      $links: [LinkInput!]
    ) {
      createHeroe(input: { name: $name, tags: $tags, links: $links }) {
        data {
          id
        }
      }
    }
  `;

  const NEW_STREAM = gql`
    mutation CreateStream($tags: [String!], $feedlyStreamsid: [String!]) {
      createStream(input: { feedlyStreamsid: $feedlyStreamsid, tags: $tags }) {
        data {
          id
        }
      }
    }
  `;

  const PUSH_NEW_SOURCE = gql`
    mutation PushSourceIntoProject($id: ID!, $target: String!, $data: String!) {
      pushInProject(id: $id, data: $data, target: $target) {
        success
      }
    }
  `;

  const GET_FEEDLY_STREAMS = gql`
    query {
      getFeedsFromFeedly {
        id
        label
      }
    }
  `;

  const feedlyStreams = useQuery(GET_FEEDLY_STREAMS);
  const [createHero] = useMutation(NEW_HERO);
  const [createStream] = useMutation(NEW_STREAM);
  const [pushNewSource] = useMutation(PUSH_NEW_SOURCE);

  const normalizedStreamIds = () => {
    const streamIds = previousState.streams.map((stream) => stream.id);
    return setState({ ...previousState, streamIds });
  };

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
          });
        });
        return props.handleForm();

      case "Stream":
        normalizedStreamIds();
        await createStream({
          variables: {
            feedlyStreamsid: previousState.streamIds,
            tags: previousState.tags,
          },
        }).then(async (response) => {
          let streamId = response.data.createStream.data.id;
          await pushNewSource({
            variables: {
              id: props.activeProject,
              target: "sources.streams",
              data: streamId,
            },
          });
        });
        return props.handleForm();

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
          labelId="trello-list-input"
          id="trello-list-inputs"
          value={previousState.activeResource}
          onChange={handleActiveResource}
          autoWidth={true}
        >
          <MenuItem value={"Stream"}>Stream</MenuItem>
          <MenuItem value={"Hero"}>Hero</MenuItem>
        </Select>
      </FormControl>
      <div className="form-content">
        {previousState.activeResource === "Hero" ? (
          <>
            <h5>Agrega el nombre de tu heroe</h5>
            <FormControl variant="filled" fullWidth={true}>
              <TextField
                onChange={handleTitleInput}
                value={previousState.title}
                id="basicTemplate"
                label="Nombre de tu heroe"
              />
            </FormControl>
            <h5>Arega los links de tu heroe</h5>
            <div>
              <FormControl>
                <TextField
                  onChange={newHeroLinkNameInput}
                  value={previousState.newLinkName}
                  id="basicTemplate"
                  label="Nombre del sitio"
                />
                <TextField
                  onChange={newHeroLinkInput}
                  value={previousState.newHeroLinkInput}
                  id="basicTemplate"
                  label="Url"
                />
              </FormControl>
              <Button onClick={addLink} color="primary">
                Agregar Link
              </Button>
              <div>
                {previousState.heroLinks.map((link, indexTag) => (
                  <Chip
                    label={link.website}
                    key={indexTag}
                    onDelete={() => deleteLink(link.website)}
                  />
                ))}
              </div>
            </div>
            <TagInput state={previousState} setState={setState} />
          </>
        ) : (
          <>
            <h5>Agrega el stream</h5>
            <FormControl variant="filled" fullWidth={true}>
              <InputLabel id="trello-list-input">Agregar Stream</InputLabel>
              <Select
                labelId="trello-list-input"
                id="trello-list-inputs"
                value={previousState.stream}
                onChange={handleStreamResource}
                autoWidth={true}
              >
                {feedlyStreams.data.getFeedsFromFeedly.map((feed) => (
                  <MenuItem key={feed.id} value={feed}>
                    {feed.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {previousState.streams.map((stream, indexTag) => (
              <Chip
                label={stream.label}
                key={indexTag}
                onDelete={() => deleteStream(stream.id)}
              />
            ))}
          </>
        )}
      </div>
      <Button onClick={handleNewSource} variant="contained" color="primary">
        Enviar formulario
      </Button>
    </form>
  );
}
