import { Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default App;
