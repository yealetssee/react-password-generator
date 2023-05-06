import React from "react";
import Strength from "./strength";
let GenerateButton = ({
  check,
  value,
  setPassword,
  setIsCopied,
  setStrengthref,
  password,
}) => {
  const generatePassword = () => {
    const Numbers = "0123456789";
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVDXYZ";
    const Lowercase = "abcdefghijklmnopqrstuvwxyz";
    const Symbols = "!@#$%^&*()_+-=\\|[{]};:'\",<.>/?";
    const Length = value;
    let characters = "";
    if (check.uppercase) {
      characters += Uppercase;
    }

    if (check.lowercase) {
      characters += Lowercase;
    }
    if (check.numbers) {
      characters += Numbers;
    }
    if (check.symbols) {
      characters += Symbols;
    }

    if (
      !check.lowercase &&
      !check.uppercase &&
      !check.numbers &&
      !check.symbols
    )
      return;

    let pswrd = "";

    const array = new Uint32Array(Length);
    window.crypto.getRandomValues(array);

    for (let i = 0; i < Length; i++) {
      pswrd += characters[array[i] % characters.length];
    }
    setIsCopied(false);
    setPassword(pswrd);
    setStrengthref(<Strength password={password} check={check} />);

    return pswrd;
  };

  return (
    <button onClick={generatePassword}>
      <span>Generate</span>
      <span>
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#24232C"
            d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          />
        </svg>
      </span>
    </button>
  );
};

export default GenerateButton;
