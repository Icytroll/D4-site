import { useState } from "react";
import Button from "./components/Button";
import ItemsContainer from "./components/ItemsContainer";
import SkillsContainer from "./components/SkillsContainer";
import ParagonContainer from "./components/ParagonContainer";

function App() {
  const [itemsWindowVisible, setItemsWindowVisibility] = useState(true);
  const [skillsWindowVisible, setSkillsWindowVisibility] = useState(false);
  const [paragonWindowVisible, setParagonWindowVisibility] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100 bg-dark">
        <div className="stats-width">
          <div className="row header-height center-vh">
            <div className="col-5 text-white text-center border border-success fs-3">
              CLASS
            </div>
            <div className="col-7 text-white text-center border border-success fs-4">
              PROFILE SELECTOR
            </div>
          </div>
          <div className="row stats-height center-vh border border-light text-white">
            STATS CONTAINER
          </div>
        </div>

        <div className="col justify-content-center flex-grow-1">
          <div className="row header-height">
            <div className="col-2 text-white bg-dark border border-success p-0">
              <Button
                children="ITEMS"
                onClick={() => {
                  setItemsWindowVisibility(true);
                  setSkillsWindowVisibility(false);
                  setParagonWindowVisibility(false);
                }}
                color="dark"
              />
            </div>
            <div className="col-2 text-white bg-dark border border-success p-0">
              <Button
                children="SKILLS"
                onClick={() => {
                  setItemsWindowVisibility(false);
                  setSkillsWindowVisibility(true);
                  setParagonWindowVisibility(false);
                }}
                color="dark"
              />
            </div>
            <div className="col-2 text-white bg-dark border border-success p-0">
              <Button
                children="PARAGON"
                onClick={() => {
                  setItemsWindowVisibility(false);
                  setSkillsWindowVisibility(false);
                  setParagonWindowVisibility(true);
                }}
                color="dark"
              />
            </div>
          </div>
          <div className="row stats-height center-vh border border-light text-white">
            {itemsWindowVisible && <ItemsContainer />}
            {skillsWindowVisible && <SkillsContainer />}
            {paragonWindowVisible && <ParagonContainer />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
