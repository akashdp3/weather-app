import Dashboard from "./screens/dashboard/Dashboard";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
