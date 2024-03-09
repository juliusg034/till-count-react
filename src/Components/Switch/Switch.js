import React from 'react';
import './Switch.css';

function Switch ({ isOn, handleToggle }) {
  return (
    <div id='switch'>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`} 
        type="checkbox"
      />

      <label
        style={{ background: isOn && '#06D6A0'}}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;