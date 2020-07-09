import React from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import { navigate } from "@reach/router";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PublishIcon from "@material-ui/icons/Publish";

import StepContent from "Molecules/Forms/SwitchContent/StepContent.jsx";
import handlingBasicProjectInput from "Utilities/Forms/HandlingNewProject";
import ColorlibStepIcon from "Atoms/utils/NewProjectStepIcons.jsx";

import { NEW_PROJECT, NEW_REPO, NEW_BOARD } from "GQL/mutations";
import { GET_GITHUB_REPOS } from "GQL/queries";

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

export default function NewProjectStepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [basicProjectInfo, setBasicInfoProject] = useState({
    title: "",
    description: "",
  });

  const githubRepos = useQuery(GET_GITHUB_REPOS);

  const [newProject, { data: newProjectData }] = useMutation(NEW_PROJECT);
  const [newRepo] = useMutation(NEW_REPO);
  const [newBoard] = useMutation(NEW_BOARD);

  const steps = getSteps();

  const handleNext = async () => {
    if (activeStep === 2) {
      const newBoardResponse = await newBoard({
        variables: {
          resourceid: basicProjectInfo.board,
          activeList: basicProjectInfo.activeList,
        },
      });

      const newRepoResponse = await newRepo({
        variables: { githubId: basicProjectInfo.repo },
      });

      const newState = await setBasicInfoProject({
        ...basicProjectInfo,
        repo: newRepoResponse.data.createRepo.data.id,
        board: newBoardResponse.data.createBoard.data.id,
      });

      const newProjectResponse = await newProject({
        variables: {
          ...basicProjectInfo,
          repo: newRepoResponse.data.createRepo.data.id,
          board: newBoardResponse.data.createBoard.data.id,
        },
      });

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
            <StepContent
              step={activeStep}
              handlingBasicProjectInput={handlingBasicProjectInput}
              githubRepos={githubRepos}
              basicProjectInfo={basicProjectInfo}
            />
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
