import structure from "./componentStructure.png";

const TodoContainer = () => {
  return (
    <div className="" style={{ width: "900px" }}>
      <h1 className="my-3 text-primary">TO-DO LIST / OBJECTIVES / WISH-LIST</h1>
      <ul>
        <li>
          <h5 className="bold my-2">Profile Selector</h5>
          <ul>
            <li>
              Ideally I'd like to have an overarching profile system, in which
              each individual profile can select between different
              Setup/Item/Skill/Paragon sets. So I can create a "Rend Endgame"
              profile via the Profile Selector Tab, where I can then choose
              between two premade Item sets "Lots of Berserking dmg" or "Rend
              range + Grandfather", and so on for the other inputs. So kind of
              "build your own profile using sets of sub-profiles"
            </li>
            <li>
              Each individual set will contain a summation of all stats within
              itself
            </li>
            <li>
              Each profile will then have a summation of stats with the sets
              that are linked to it
            </li>
            <img
              className="my-3"
              style={{ width: "700px" }}
              src={structure}
              alt="simulator data structure"
            />
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">The Simulator</h5>
          <ul>
            <li>
              The simulator will be responsible for:
              <ul>
                <li>
                  Using the summed up stats and setup options of the current
                  profile to calculate dmg of a selected skill as well as EHP
                </li>
                <li>
                  Displaying the results and summed up stats in the stats
                  container
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">Stats container</h5>
          <ul>
            <li>
              Add a DMG/DPS element that can change depending on what skill is
              picked (add a skill selector somewhere)
            </li>
            <li>
              Add an EHP (effective HP) element that shouldn't have other inputs
              but the calculator result
            </li>
            <li>Below those two, add every other stat in an ordered list</li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">Setup/Misc</h5>
          <ul>
            <li>
              Add checkmarks for each conditional for the character and a
              target, which would influence what the calculator takes into
              account, includes but is not limited to:
              <ul>
                <li>Are we berserking?</li>
                <li>Are we causing a crit?</li>
                <li>Are we causing an overpower?</li>
                <li>Are we healthy?</li>
                <li>Are we injured (mutually exclusive with the above)</li>
                <li>Are we fortified?</li>
                <li>Are we using an elixir? (in which case which one)</li>
                <li>Is the target healhty?</li>
                <li>
                  Is the target injured? (mutually exclusive with the above)
                </li>
                <li>Is the target bleeding?</li>
                <li>Is the target vulnerable?</li>
                <li>Is the target close?</li>
                <li>Is the target far? (mutually exclusive with the above)</li>
                <li>Is the target stunned?</li>
                <li>Is the target slowed?</li>
              </ul>
            </li>
            <li>
              Add checkmarks for aspects/unique effects from the item
              sub-profile that is linked to the current profile
            </li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">Items</h5>
          <ul>
            <li>
              Add drop-down options specific to each item stat, can't pick the
              same stat for all three Affixes etc
            </li>
            <li>
              Different colours for each stat type? (affix, tempering, aspect,
              gem)
            </li>
            <li>Incorporate Masterworking somehow</li>
            <li>
              Add functionality to "equip"/"unequip" a unique item in an item
              slot, replacing the "Aspect" input row with a "Unique" row that
              doesn't have a searchable input but instead a text element
              describing the unique item's extra stat, with the value field
              being a regular input
            </li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">Skills/Techniques</h5>
          <ul>
            <li>Add skills</li>
            <li>Add technique slots</li>
            <li>Nodes should be interactive on/off through clicks</li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">Paragon</h5>
          <ul>
            <li>
              Add a canvas to the Paragon tab that can be moved and zoomed
              in/out of
            </li>
            <li>Nodes should be interactive on/off through clicks</li>
          </ul>
        </li>
        <li>
          <h5 className="bold my-2">General stuff</h5>
          <ul>
            <li>
              Figure out how to decrypt D4 data using the hash function found at{" "}
              <a
                href="https://github.com/lothrik/diablo4-build-calc"
                target="_blank"
              >
                Lothrik github
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default TodoContainer;
