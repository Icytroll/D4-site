import { FC, useState } from "react";
import Button from "./Button";
import MiscContainer from "./Miscellaneous/MiscContainer";
import ItemsContainer from "./Items/ItemsContainer";
import SkillsContainer from "./Skills/SkillsContainer";
import ParagonContainer from "./Paragon/ParagonContainer";
import StatsContainer from "./Stats/StatsContainer";
import TodoContainer from "./Todo";
import { itemSlots } from "./Items/slots";

type TabType = "setupMisc" | "items" | "skills" | "paragon" | "todo";

const tabs: Array<{ type: TabType; label: string }> = [
  { type: "setupMisc", label: "Setup/Misc" },
  { type: "items", label: "Items" },
  { type: "skills", label: "Skills" },
  { type: "paragon", label: "Paragon" },
  { type: "todo", label: "Todo" },
];

/*
const tabContainers: Record<TabType, FC> = {
  setupMisc: MiscContainer,
  items: ItemsContainer,
  skills: SkillsContainer,
  paragon: ParagonContainer,
  todo: TodoContainer,
};
*/

const Simulator = () => {
  const [visibleTab, setVisibleTab] = useState<TabType>("items");
  //const TabContainer = tabContainers[visibleTab];

  return (
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
        <div className="row border border-light text-white scroll-auto">
          <StatsContainer />
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
        <div className="row center-vh border border-light text-white scroll-auto">
          {visibleTab === "setupMisc" ? (
            <MiscContainer />
          ) : visibleTab === "items" ? (
            <ItemsContainer itemSlots={[...itemSlots]} />
          ) : visibleTab === "skills" ? (
            <SkillsContainer />
          ) : visibleTab === "paragon" ? (
            <ParagonContainer />
          ) : (
            <TodoContainer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Simulator;
