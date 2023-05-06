import "./App.css";
import { useState } from "react";

import Checkbox from "./components/checkbox";
import GenerateButton from "./components/generateButton";
import Strength from "./components/strength";
function App() {
  const [value, setRange] = useState(5);

  const [check, setCheck] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  });
  const [password, setPassword] = useState("");
  const [strengthRef, setStrengthref] = useState(null);

  const [isCopied, setIsCopied] = useState(false);
  const trackStyle = {
    backgroundSize: `${((value - 5) * 100) / (15 - 5)}% 100%`,
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;
    setCheck((checkbox) => {
      return { ...checkbox, [id]: checked };
    });
  };

  const copyClickHandler = () => {
    if (password !== "") {
      const copiedPass = password;
      navigator.clipboard.writeText(copiedPass);
      setIsCopied(true);
    } else return;
  };

  return (
    <main>
      <h1>Password Generator</h1>
      <div className="showPass">
        <span
          className="pswrd"
          style={
            password !== ""
              ? { color: `${"var(--almost-white)"}` }
              : { color: `${"var(--grey)"}` }
          }
        >
          {password === "" ? "P4$5W0rD!" : password}
        </span>
        <div className="copy">
          {isCopied && <span className="copied">COPIED</span>}
          <svg
            className="copySVG"
            width="21"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={copyClickHandler}
          >
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
      </div>
      <div className="generatorParent">
        <label className="charLength" htmlFor="charLength">
          Character Length <span>{value}</span>
        </label>
        <input
          type="range"
          min="5"
          max="15"
          defaultValue="5"
          onInput={(event) => setRange(event.target.value)}
          style={trackStyle}
        />
        <div className="includeCheck">
          <Checkbox
            for="uppercase"
            text="Include Uppercase Letters"
            name="uppercase"
            id="uppercase"
            checked={check.uppercase}
            onChange={handleChange}
          />

          <Checkbox
            for="lowercase"
            text="Include Lowercase Letters"
            name="lowercase"
            id="lowercase"
            checked={check.lowercase}
            onChange={handleChange}
          />
          <Checkbox
            for="numbers"
            text="Include Numbers"
            name="numbers"
            id="numbers"
            checked={check.numbers}
            onChange={handleChange}
          />
          <Checkbox
            for="symbols"
            text="Include Symbols"
            name="symbols"
            id="symbols"
            checked={check.symbols}
            onChange={handleChange}
          />
        </div>
        {/* <Strength password={password} check={check} /> */}
        {strengthRef === null ? (
          <div className="strengthParent">
            <span>Strength</span>
            <div className="showStrength">
              <p></p>
              <div className="bars">
                <div className="first bar"></div>
                <div className="second bar"></div>
                <div className="third bar"></div>

                <div className="fourth bar"></div>
              </div>
            </div>
          </div>
        ) : (
          strengthRef
        )}

        <GenerateButton
          check={check}
          value={value}
          password={password}
          setPassword={setPassword}
          setIsCopied={setIsCopied}
          setStrengthref={setStrengthref}
        />
      </div>
    </main>
  );
}

export default App;
