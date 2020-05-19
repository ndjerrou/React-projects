import React from "react";

export default ({ label, value, nameRadio }) => {
  return (
    <>
      <label>
        {label}
        <input type="radio" value={value} name={nameRadio} />
      </label>
    </>
  );
};
