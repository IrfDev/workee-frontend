import React from "react";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";

import Button from "@material-ui/core/Button";
import DescriptionIcon from "@material-ui/icons/Description";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

import MicrosoftLogin from "Atoms/utils/MicrosoftLogin.jsx";
import LoginForm from "Molecules/Forms/Login.jsx";
import ResourceShowListing from "Molecules/Landing/ResourceShowListing.jsx";

import Reviews from "Molecules/Landing/Reviews.jsx";

export default function Landing() {
  return (
    <div className="container-fluid landing-view">
      <div className="welcome-header row m-0 p-5 align-items-center justify-content-end text-lg-right text-center">
        <div className="col-lg-6 col-12">
          <h1>Your developer resources in one place</h1>
          <p>
            Keep all your resource in one place. Stop open tabs in your browser
            and let’s get everything you need in one place.
          </p>
          <Button
            size="large"
            variant="contained"
            color="primary"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Sign Up
          </Button>
        </div>
        <div className="col-lg-6 col-12 mt-lg-0 mt-5">
          <img
            src="/hero-header-workee.svg"
            alt="Workee"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row p-5 mt-3 m-0 justify-content-between features-landing">
        <div className="col-12 text-center mb-3">
          <h2>Organize your information</h2>
        </div>
        <div className="col-md-3 col-12 mb-lg-0 mb-5 justify-content-around align-items-stretch">
          <div className="card p-3 d-flex align-items-center">
            <div className="card-title d-flex justify-content-center">
              <DeveloperModeIcon color="primary" fontSize="large" />
            </div>
            <div className="card-body text-center">
              <p>One place to manage your dev resources for project</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-lg-0 mb-5 justify-content-around align-items-stretch ">
          <div className="card p-3 d-flex align-items-center">
            <div className="card-title d-flex justify-content-center">
              <FormatListBulletedIcon color="primary" fontSize="large" />
            </div>
            <div className="card-body text-center">
              <p>Import your daily tasks and your weekly boards</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-lg-0 mb-5 justify-content-around align-items-stretch">
          <div className="card p-3 d-flex align-items-center">
            <div className="card-title d-flex justify-content-center">
              <DescriptionIcon color="primary" fontSize="large" />
            </div>
            <div className="card-body text-center">
              <p>Add documentation, notebooks and all you need</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-0 text-center justify-content-center align-items-stretch">
        <div className="col-12">
          <h3>Work smart not hard!</h3>
          <p>
            keep the inspiration while your working and if you need something
            else, just come to your resources
          </p>
        </div>
        <div className="col-lg-4 col-10">
          <img src="/mock-workee.jpg" alt="workee mock" className="img-fluid" />
        </div>
        <div className="col-lg-4 col-10 align-items-center">
          <ResourceShowListing />
        </div>
        <div className="col-12 p-5">
          <h3 className="text-center">Read some reviews</h3>
          <p>Discover the power of being productive</p>
          <Reviews />
        </div>
      </div>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body login-form d-flex justify-content-center flex-column text-center">
              <h1>Sign In</h1>
              <p>
                This demo app is only available
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link-workee"
                  href="https://irving.digital/schedule"
                >
                  {"  "}through a online meeting
                </a>
                , sorry for the inconvenience
              </p>
              <LoginForm />
              <div className="w100">
                <MicrosoftLogin />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
