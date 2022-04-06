import axios from "axios";
import React from "react";
import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";
import "./i18n";
import { AppRouter } from "@common";
import { getToken } from "@helpers";

// Axios default config
(async () => {
  const token = await getToken();
  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api/menus`;
  axios.defaults.headers.get["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.patch["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.delete["Authorization"] = `Bearer ${token}`;
  axios.defaults.headers.common["Content-Type"] = "application/json";
})();

const App: React.FC = () => (
  <AmplifyAuthenticator>
    <AmplifySignIn
      slot="sign-in"
      hideSignUp
      formFields={[{ type: "username" }, { type: "password", hint: "" }]}
    />
    <AppRouter />
  </AmplifyAuthenticator>
);

export default App;
