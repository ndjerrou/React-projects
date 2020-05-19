import React from "react";

export default ({ name, choices }) => {
  return (
    <select name={name}>
      <option value="">Merci de choisir une option</option>
      <option value="MMVV">MMV</option>
      <option value="MVC">MVC</option>
      <option value="MMVV">MMVV</option>
    </select>
  );
};
