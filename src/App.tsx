import { useState, useEffect } from "react";

import Dashboard from "./screens/dashboard/Dashboard";
import "./App.css";
import AuthTokenService from "./services/token.service";

// class App extends React.Component {
//   componentDidMount(): void {
//     AuthTokenService.setAuthToken();
//   }

//   render() {
//     return (
//       <>
//         <Dashboard />
//       </>
//     );
//   }
// }

const App = () => {
  const [isLocationPermissionGranted, setLocationPermission] = useState(false);
  const [isPermisionChecked, setPermisionChecked] = useState(false);

  useEffect(() => {
    AuthTokenService.setAuthToken();
    navigator.permissions.query({ name: "geolocation" }).then((res) => {
      setLocationPermission(res.state === "granted");
      setPermisionChecked(true);
    });
  }, []);

  return (
    <>
      {isPermisionChecked && (
        <Dashboard isLocationPermissionGranted={isLocationPermissionGranted} />
      )}
    </>
  );
};

export default App;
