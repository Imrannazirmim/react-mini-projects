
import React, { useState } from "react";

const Switcher = () => {
    const [sw, setSw] = useState(false)
    const handleClick = () => {
        setSw(true);
        setSw(() => !sw)
    }
  return <div className={sw ? 'bg-slate-900 text-white' : 'bg-slate-50'}>
    <button onClick={handleClick}>{sw ? 'dark' : 'light'}</button>
  </div>;
};

export default Switcher;
