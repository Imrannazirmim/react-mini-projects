import React, { useState } from "react";
import Popup from "./Popup";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    })
    setInputValue('')
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleClick}>copy</button>
      </div>
      <Popup copied={copied}/>
    </div>
  );
};

export default CopyInput;
