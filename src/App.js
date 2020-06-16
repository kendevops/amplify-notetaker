import React from "react";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const App = () => {
  return (
    <AmplifyAuthenticator>
      <div>
        <h1>APP</h1>
        <AmplifySignOut />
      </div>
    </AmplifyAuthenticator>
  );
};

export default App;
