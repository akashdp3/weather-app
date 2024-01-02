import React from "react";

import Dashboard from "./screens/dashboard/Dashboard";
import "./App.css";
import AuthTokenService from "./services/token.service";

class App extends React.Component {
  componentDidMount(): void {
    AuthTokenService.setAuthToken();
  }

  render() {
    return (
      <>
        <Dashboard />
      </>
    );
  }
}

export default App;
