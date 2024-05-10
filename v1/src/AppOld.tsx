import { useEffect, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const [color, setColor] = useState("orange");
  const click = (color: string) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div className="container-fluid text-center">
      <div className="row min-vh-100 bg-dark">
        <div className="stats-width">
          <div className="row header-height">
            <div className="col-5 text-white border border-success">CLASS</div>
            <div className="col-7 text-white border border-success">
              PROFILE SELECTOR
            </div>
          </div>
          <div className="row stats-height center-vh border border-light text-white">
            STATS CONTAINER
          </div>
        </div>

        <div className="col justify-content-center flex-grow-1">
          <div className="row header-height">
            <div className="col-4 text-white bg-dark border border-success">
              ITEMS SELECTOR
            </div>
            <div className="col-4 text-white bg-dark border border-success">
              SKILLS SELECTOR
            </div>
            <div className="col-4 text-white bg-dark border border-success">
              PARAGON SELECTOR
            </div>
          </div>
          <div className="row stats-height center-vh border border-light text-white">
            CONTAINER
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
