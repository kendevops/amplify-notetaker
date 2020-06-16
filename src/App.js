import React from "react";
import { withAuthenticator } from "aws-amplify-react";

const App = () => {
  return (
    <div>
      <h1>APP</h1>
    </div>
  );
};

export default withAuthenticator(App, { includeGreetings: true });
