import { FC, useState } from "react";
import Button from "./components/Button";
import MiscContainer from "./components/Miscellaneous/MiscContainer";
import ItemsContainer from "./components/Items/ItemsContainer";
import SkillsContainer from "./components/Skills/SkillsContainer";
import ParagonContainer from "./components/Paragon/ParagonContainer";
import StatsContainer from "./components/Stats/StatsContainer";
import TodoContainer from "./components/Todo";

// vvvv this is black magic
type TabType = "setupMisc" | "items" | "skills" | "paragon" | "todo";

const tabs: Array<{ type: TabType; label: string }> = [
  { type: "setupMisc", label: "Setup/Misc" },
  { type: "items", label: "Items" },
  { type: "skills", label: "Skills" },
  { type: "paragon", label: "Paragon" },
  { type: "todo", label: "Todo" },
];

const tabContainers: Record<TabType, FC> = {
  setupMisc: MiscContainer,
  items: ItemsContainer,
  skills: SkillsContainer,
  paragon: ParagonContainer,
  todo: TodoContainer,
};
// ^^^^ this is black magic

function App() {
  // vvvv this is black magic
  const [visibleTab, setVisibleTab] = useState<TabType>("items");
  const TabContainer = tabContainers[visibleTab];
  // ^^^^ this is black magic

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
          <StatsContainer />
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
