import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import TextField from "@material-ui/core/TextField";

import CreateIcon from "@material-ui/icons/Create";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublishIcon from "@material-ui/icons/Publish";
import { useState } from "react";

import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { navigate } from "@reach/router";

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 100,
    alignItems: "center",
  },
  active: {
    color: "#784af4",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <CreateIcon />,
    2: <DashboardIcon />,
    3: <GitHubIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Nombre y descripción", "Agregar tablero", "Agregar Repo"];
}

function getStepContent(
  step,
  { handlingBasicProjectInput, githubRepos, trelloBoards, trelloLists }
) {
  switch (step) {
    case 0:
      return (
        <div>
          <h4>Básico</h4>
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            onChange={(e) => handlingBasicProjectInput("name", e)}
          />
          <TextField
            id="standard-multiline-static"
            label="Descripción"
            multiline
            variant="outlined"
            rows={4}
            onChange={(e) => handlingBasicProjectInput("description", e)}
          />
        </div>
      );
    case 1:
      return (
        <div>
          <h4>Selecciona un tablero de Trello y una lista activa</h4>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="trello-board-input">Tablero</InputLabel>
            <Select
              labelId="trello-board-input"
              id="trello-board-inputs"
              autoWidth={true}
              onChange={(e) => handlingBasicProjectInput("board", e)}
            >
              {trelloBoards.data.getTrelloBoards.map((board) => (
                <MenuItem key={board.id} value={board.id}>
                  {board.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="trello-list-input">Lista</InputLabel>
            <Select
              labelId="trello-list-input"
              id="trello-list-inputs"
              autoWidth={true}
              onChange={(e) => handlingBasicProjectInput("activeList", e)}
            >
              {trelloLists.data ? (
                trelloLists.data.getTrelloListsFromBoard.map((board) => (
                  <MenuItem key={board.id} value={board.id}>
                    {board.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem selected={true}>Selecciona un tablero</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
      );
    case 2:
      return (
        <div>
          <h3>Selecciona un repositorio activo de Github</h3>
          <FormControl variant="filled" fullWidth={true}>
            <InputLabel id="repo-input">Selecciona tu repo</InputLabel>
            <Select
              labelId="repo-input"
              id="repo-id-input"
              value={"asidjaso8djas"}
              autoWidth={true}
              onChange={(e) => handlingBasicProjectInput("repo", e)}
            >
              {githubRepos.data.getAllGithubRepos.map((repo) => (
                <MenuItem key={repo.id} value={repo.id}>
                  {repo.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
    default:
      return "Unknown step";
  }
}

export default function NewProjectStepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [basicProjectInfo, setBasicInfoProject] = useState({
    title: "",
    description: "",
  });
  const steps = getSteps();

  const NEW_PROJECT = gql`
    mutation CreateProject(
      $title: String!
      $description: String!
      $board: String!
      $repo: String!
    ) {
      createProject(
        input: {
          title: $title
          description: $description
          weekly: { Boards: [$board] }
          resources: { repos: [$repo] }
        }
      ) {
        data {
          title
          description
          id
        }
      }
    }
  `;

  const NEW_REPO = gql`
    mutation CreateRepo($githubId: String!) {
      createRepo(input: { githubId: $githubId }) {
        data {
          id
        }
      }
    }
  `;

  const NEW_BOARD = gql`
    mutation CreateBoard($resourceId: String!, $activeList: String!) {
      createBoard(input: { resourceid: $resourceId, activeList: $activeList }) {
        data {
          id
        }
      }
    }
  `;

  const GET_GITHUB_REPOS = gql`
    query {
      getAllGithubRepos {
        id
        name
      }
    }
  `;
  const GET_TRELLO_BOARDS = gql`
    query {
      getTrelloBoards {
        id
        name
      }
    }
  `;
  const GET_TRELLO_LISTS = gql`
    query GetTrelloLists($boardId: ID!) {
      getTrelloListsFromBoard(boardId: $boardId) {
        name
        id
      }
    }
  `;

  const githubRepos = useQuery(GET_GITHUB_REPOS);
  const trelloBoards = useQuery(GET_TRELLO_BOARDS);
  const trelloLists = useQuery(GET_TRELLO_LISTS);

  const [newProject, { data: newProjectData }] = useMutation(NEW_PROJECT);

  const [newRepo] = useMutation(NEW_REPO);

  const [newBoard] = useMutation(NEW_BOARD);

  const handleNext = async () => {
    if (activeStep === 2) {
      const newBoardResponse = await newBoard({
        variables: {
          resourceId: basicProjectInfo.board,
          activeList: basicProjectInfo.activeList,
        },
      });

      const newRepoResponse = await newRepo({
        variables: { githubId: basicProjectInfo.repo },
      });

      await setBasicInfoProject({
        ...basicProjectInfo,
        repo: newRepoResponse.data.createRepo.data.id,
        board: newBoardResponse.data.createBoard.data.id,
      });

      const newProjectResponse = await newProject({
        variables: basicProjectInfo,
      });

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlingBasicProjectInput = (target, event) => {
    event.persist();
    switch (target) {
      case "name":
        setBasicInfoProject({ ...basicProjectInfo, title: event.target.value });
        break;

      case "description":
        setBasicInfoProject({
          ...basicProjectInfo,
          description: event.target.value,
        });
        break;

      case "board":
        setBasicInfoProject({
          ...basicProjectInfo,
          board: event.target.value,
        });
        trelloLists.refetch({ boardId: basicProjectInfo.board });
        break;

      case "activeList":
        setBasicInfoProject({
          ...basicProjectInfo,
          activeList: event.target.value,
        });
        break;

      case "repo":
        setBasicInfoProject({
          ...basicProjectInfo,
          repo: event.target.value,
        });
        break;

      default:
        return "Unknown input";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Tu proyecto está creado
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                navigate(`/project/${newProjectData.createProject.data.id}`)
              }
              className={classes.button}
            >
              Ir a mi proyecto
              <PublishIcon />
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, {
              handlingBasicProjectInput,
              githubRepos,
              trelloBoards,
              basicProjectInfo,
              trelloLists,
            })}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Atrás
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
