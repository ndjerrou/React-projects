import React from "react";
import Select from "./Select";

export default ({ type, label, nameRadio, value }) => {
  return (
    <span>
      <label>
        {label}
        <input type={type} value={value} name={nameRadio} />
      </label>
    </span>
  );
};
