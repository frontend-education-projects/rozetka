import React, { ReactNode } from "react";

type propCopyrightModalWindow = {
  text: string;
  content: string;
  openCard: any;
  setOpenCard: any;
};

const CopyrightModalWindow = ({
  text,
  content,
  openCard,
  setOpenCard,
}: propCopyrightModalWindow) => {
  return (
    <>
      <div
        className={`modal_holder_cards animated_cards ${
          openCard ? "show_cards" : ""
        } `}
      >
        <div className="modal_window_cards">
          <div className="modal_header_cards">
            <div className="modal_heading_cards">{text}</div>
            <button
              onClick={() => setOpenCard(false)}
              className="modal_close_cards"
            >
              X
            </button>
          </div>
          <div className="modal_content_cards">
            <p className="modal_content_text">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyrightModalWindow;
