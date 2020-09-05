import React from "react";

import Logo from "Atoms/utils/Logo.jsx";

import { useLocation } from "@reach/router";

export default function Footer() {
  const location = useLocation();

  if (location.pathname.includes("projects")) {
    return <></>;
  } else {
    return (
      <footer className="row m-0 justify-content-lg-between align-items-center">
        <div className="col-lg-4 col-12">
          <Logo width={45} />
          <h5 className="mt-3 mb-2">Workee</h5>
          <p>
            Workee is an open source project to help developers be more
            productives, organize resources, projects and keep inspiration.
          </p>
        </div>
        <div className="col-lg-3 col-12 text-lg-right">
          <h5>Contact us!</h5>
          <input type="email" name="email" id="mail-footer" />
        </div>
        <div className="col-6 text-lg-left">
          <small>Workee.site all rights reserved!</small>
        </div>
        <div className="col-6 text-lg-right">
          <small>
            Made with{""}
            <span aria-label="hear-emoji" role="img">
              ♥️{""}
            </span>
            by{""}
            <a href="https://irving.digital" targer="_blank">
              {""}@IrfDev
            </a>
          </small>
        </div>
      </footer>
    );
  }
}
