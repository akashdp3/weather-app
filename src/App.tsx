import React from "react";

import Dashboard from "./screens/dashboard/Dashboard";
import Navbar from "./Navbar";
import "./App.css";
import AuthTokenService from "./services/token.service";

class App extends React.Component {
  componentDidMount(): void {
    AuthTokenService.setAuthToken();
  }

  render() {
    return (
      <div className="flex flex-col gap-4">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
