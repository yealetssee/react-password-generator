import React from "react";

const Strength = ({ password, check }) => {
  const checkboxes = Object.keys(...[check]);
  let count = 0;
  checkboxes.forEach((box) => {
    if (check[box]) count += 1;
  });

  const length = password.length;

  if (count === 1) {
    return (
      <div className="strengthParent">
        <span>Strength</span>
        <div className="showStrength">
          <p>Too Weak!</p>
          <div className="bars">
            <div className="first bar tooweak"></div>
            <div className="second bar"></div>
            <div className="third bar"></div>

            <div className="fourth bar"></div>
          </div>
        </div>
      </div>
    );
  }
  if (count === 2) {
    if (length <= 10) {
      return (
        <div className="strengthParent">
          <span>Strength</span>
          <div className="showStrength">
            <p>Weak</p>
            <div className="bars">
              <div className="first bar weak"></div>
              <div className="second bar weak"></div>
              <div className="third bar"></div>

              <div className="fourth bar"></div>
            </div>
          </div>
        </div>
      );
    } else if (length > 10) {
      return (
        <div className="strengthParent">
          <span>Strength</span>
          <div className="showStrength">
            <p>Medium</p>
            <div className="bars">
              <div className="first bar medium"></div>
              <div className="second bar medium"></div>
              <div className="third bar medium"></div>

              <div className="fourth bar"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  if (count === 3) {
    if (length >= 12) {
      return (
        <div className="strengthParent">
          <span>Strength</span>
          <div className="showStrength">
            <p>Strong</p>
            <div className="bars">
              <div className="first bar strong"></div>
              <div className="second bar strong"></div>
              <div className="third bar strong"></div>

              <div className="fourth bar strong"></div>
            </div>
          </div>
        </div>
      );
    } else if (length < 12) {
      return (
        <div className="strengthParent">
          <span>Strength</span>
          <div className="showStrength">
            <p>Medium</p>
            <div className="bars">
              <div className="first bar medium"></div>
              <div className="second bar medium"></div>
              <div className="third bar medium"></div>

              <div className="fourth bar"></div>
            </div>
          </div>
        </div>
      );
    }
  }
  if (count === 4) {
    return (
      <div className="strengthParent">
        <span>Strength</span>
        <div className="showStrength">
          <p>Strong</p>
          <div className="bars">
            <div className="first bar strong"></div>
            <div className="second bar strong"></div>
            <div className="third bar strong"></div>

            <div className="fourth bar strong"></div>
          </div>
        </div>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="strengthParent">
        <span>Strength</span>
        <div className="showStrength">
          <p style={"color:red"}>Please choose at least one option</p>
          <div className="bars">
            <div className="first bar strong"></div>
            <div className="second bar strong"></div>
            <div className="third bar strong"></div>

            <div className="fourth bar strong"></div>
          </div>
        </div>
      </div>
    );
  }
};

export default Strength;
