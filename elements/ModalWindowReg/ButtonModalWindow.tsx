import React from "react";

type entryProp = {
  entry: string;
  isValid: any;
};

const ButtonModalWindow = ({ entry, isValid }: entryProp) => {
  return (
    <>
      <button
        disabled={isValid}
        type="submit"
        className="button button_auth_modal"
      >
        {entry}
      </button>
    </>
  );
};

export default ButtonModalWindow;
