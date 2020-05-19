import React from "react";

export default ({ children }) => {
  const onSubmitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={onSubmitForm}>
      {children}

      <button>Submit</button>
    </form>
  );
};
