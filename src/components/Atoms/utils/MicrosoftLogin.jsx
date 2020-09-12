import React from "react";

import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

const MicrosoftLogin = () => {
  return (
    <Button
      size="medium"
      variant="contained"
      color="primary"
      href="http://localhost:9000/auth/signin"
    >
      <LockIcon />
      Login with Microsoft
    </Button>
  );
};

export default MicrosoftLogin;
