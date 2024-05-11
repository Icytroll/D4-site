import { FC, useState } from "react";
import Button from "./components/Button";
import ItemsContainer from "./components/ItemsContainer";
import SkillsContainer from "./components/SkillsContainer";
import ParagonContainer from "./components/ParagonContainer";

type TabType = "items" | "skills" | "paragon";

const tabs: Array<{ type: TabType; label: string }> = [
  { type: "items", label: "Items" },
  { type: "skills", label: "Skills" },
  { type: "paragon", label: "Paragon" },
];

const tabContainers: Record<TabType, FC> = {
  items: ItemsContainer,
  skills: SkillsContainer,
  paragon: ParagonContainer,
};

function App() {
  const [visibleTab, setVisibleTab] = useState<TabType>("items");
  const TabContainer = tabContainers[visibleTab];

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
          <div className="row center-vh border border-light text-white">
            STATS CONTAINER
          </div>
        </div>

        <div className="col justify-content-center flex-grow-1">
          <div className="row header-height">
            {tabs.map((tab) => (
              <div
                key={tab.type}
                className="main-view-tab text-white bg-dark border border-success g-0"
              >
                <Button
                  onClick={() => {
                    setVisibleTab(tab.type);
                  }}
                  color="dark"
                >
                  {tab.label}
                </Button>
              </div>
            ))}
          </div>
          <div className="row center-vh border border-light text-white">
            <TabContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
