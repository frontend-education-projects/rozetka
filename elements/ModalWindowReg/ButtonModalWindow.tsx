import React from "react";

type entryProp = {
  entry: string;
};

const ButtonModalWindow = ({ entry }: entryProp) => {
  return (
    <>
      <button className="button button_auth_modal">{entry}</button>
    </>
  );
};

export default ButtonModalWindow;
