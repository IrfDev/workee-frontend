import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

const MicrosoftLogin = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      href="https://api.workee.site/auth/signin"
    >
      <LockIcon />
      Login with Microsoft
    </Button>
  );
};

export default MicrosoftLogin;
