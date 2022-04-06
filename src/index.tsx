import * as React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import App from "./App";
import "normalize.css";

Amplify.configure(awsExports);

ReactDOM.render(<App />, document.getElementById("root"));
