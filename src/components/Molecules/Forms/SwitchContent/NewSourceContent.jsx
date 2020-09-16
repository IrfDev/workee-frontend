import React from "react";
import { useQuery } from "@apollo/react-hooks";

import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import { CircularProgress } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { GET_FEEDLY_STREAMS } from "GQL/queries";

import TagInput from "Atoms/forms/TagsResourceInput.jsx";

export default function NewHeroForm(props) {
  const feedlyStreams = useQuery(GET_FEEDLY_STREAMS);

  const handleStreamResource = (e) => {
    e.persist();
    const streamArray = props.previousState.streams;
    const newStream = e.target.value;

    streamArray.push(newStream);

    props.setState({
      ...props.previousState,
      streams: streamArray,
    });
  };

  const deleteStream = (previousStream) => {
    const stream = props.previousState.streams;
    const filterStream = stream.filter(
      (stream) => stream.id !== previousStream
    );

    props.setState({
      ...props.previousState,
      streams: filterStream,
      newTagInput: "",
    });
  };

  const addLink = () => {
    const linksArray = props.previousState.heroLinks;

    const newLink = {
      urlLink: props.previousState.newHeroLinkInput,
      website: props.previousState.newLinkName,
    };

    linksArray.push(newLink);

    props.setState({
      ...props.previousState,
      heroLinks: linksArray,
      newHeroLinkInput: "",
      newLinkName: "",
    });
  };

  const handleTitleInput = (e) => {
    e.persist();
    props.setState({ ...props.previousState, hero: { name: e.target.value } });
  };

  const newHeroLinkInput = (e) => {
    e.persist();

    props.setState({
      ...props.previousState,
      newHeroLinkInput: e.target.value,
    });
  };

  const newHeroLinkNameInput = (e) => {
    e.persist();

    props.setState({
      ...props.previousState,
      newLinkName: e.target.value,
    });
  };

  const deleteLink = (newTag) => {
    const tags = props.previousState.heroLinks;
    const tagsWithoutDeletedTag = tags.filter((tag) => tag.website !== newTag);

    props.setState({
      ...props.previousState,
      heroLinks: tagsWithoutDeletedTag,
      newHeroLinkInput: "",
    });
  };

  switch (props.previousState.activeResource) {
    case "Hero":
      return (
        <>
          <h5>Agrega el nombre de tu heroe</h5>
          <FormControl variant="filled" fullWidth={true}>
            <TextField
              onChange={handleTitleInput}
              value={props.previousState.title}
              id="basicTemplate"
              label="Nombre de tu heroe"
            />
          </FormControl>
          <h5>Arega los links de tu heroe</h5>
          <div>
            <FormControl>
              <TextField
                onChange={newHeroLinkNameInput}
                value={props.previousState.newLinkName}
                id="basicTemplate"
                label="Nombre del sitio"
              />
              <TextField
                onChange={newHeroLinkInput}
                value={props.previousState.newHeroLinkInput}
                id="basicTemplate"
                label="Url"
              />
            </FormControl>
            <Button onClick={addLink} color="primary">
              Agregar Link
            </Button>
            <div>
              {props.previousState.heroLinks.map((link, indexTag) => (
                <Chip
                  label={link.website}
                  key={indexTag}
                  onDelete={() => deleteLink(link.website)}
                />
              ))}
            </div>
          </div>
          <TagInput state={props.previousState} setState={props.setState} />
        </>
      );

    default:
      return (
        <>
          <h5>Agrega el stream</h5>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="trello-list-input">Agregar Stream</InputLabel>
            <Select
              labelId="trello-list-input"
              id="trello-list-inputs"
              value={props.previousState.stream}
              onChange={handleStreamResource}
              autoWidth={true}
            >
              {!feedlyStreams.loading && feedlyStreams.data ? (
                feedlyStreams.data.getFeedsFromFeedly.map((feed) => (
                  <MenuItem key={feed.id} value={feed}>
                    {feed.label}
                  </MenuItem>
                ))
              ) : (
                <CircularProgress />
              )}
            </Select>
          </FormControl>
          {props.previousState.streams.map((stream, indexTag) => (
            <Chip
              label={stream.label}
              key={indexTag}
              onDelete={() => deleteStream(stream.id)}
            />
          ))}
        </>
      );
  }
}
