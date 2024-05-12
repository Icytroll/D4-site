const StatsContainer = () => {
  return (
    <div className="row center-vh border border-light text-white">
      STATS CONTAINER
      <h2>TO-DO LIST</h2>
      <ul className="ul-todo">
        <li>
          <span className="bold">The Calculator</span>
          <ul>
            <li>how though</li>
          </ul>
        </li>
        <li>
          <span className="bold">Stats container</span>
          <ul>
            <li>
              Add a DMG/DPS element that can change depending on what skill is
              picked
            </li>
            <li>
              Add a EHP (effective HP) element that shouldn't have other inputs
              but the calculator result
            </li>
            <li>Below those two, add every other stat in an ordered list</li>
          </ul>
        </li>
        <li>
          Everything in the Setup/Misc, Items, Skills and Paragon tabs needs to
          be tracked by the calculator
        </li>
        <li>
          <span className="bold">Setup/Misc</span>
          <ul>
            <li>
              Add checkmarks for each conditional for the character and a
              target, which would influence what the calculator takes into
              account
            </li>
          </ul>
        </li>
        <li>
          <span className="bold">Items</span>
          <ul>
            <li>
              Add drop-down options specific to each item stat, can't pick the
              same stat for all three Affixes etc
            </li>
            <li>
              Different colours for each stat type? (affix, tempering, aspect,
              gem)
            </li>
          </ul>
        </li>
        <li>
          <span className="bold">Skills/Techniques</span>
          <ul>
            <li>Add skills</li>
            <li>Add technique slots</li>
            <li>Nodes should be interactive on/off through clicks</li>
          </ul>
        </li>
        <li>
          <span className="bold">Paragon</span>
          <ul>
            <li>
              Add a canvas to the Paragon tab that can be moved and zoomed
              in/out of
            </li>
            <li>Nodes should be interactive on/off through clicks</li>
          </ul>
        </li>
        <li>
          <span className="bold">
            Overflow test, should not extend the entire page, just make the
            stats container fill the remaining page height then become
            scrollable
          </span>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default StatsContainer;
