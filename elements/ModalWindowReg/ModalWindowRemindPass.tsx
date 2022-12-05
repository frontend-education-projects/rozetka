import AuthModalSocials from "elements/AuthModalSocials/AuthModalSocials";
import React from "react";
import ButtonModalWindow from "./ButtonModalWindow";

type remindePassProp = {
  openRemindePass: any;
  setOpenRemindePass: any;
};

export const ModalWindowRemindPass = ({
  openRemindePass,
  setOpenRemindePass,
}: remindePassProp) => {
  return (
    <>
      <div
        onClick={() => setOpenRemindePass(false)}
        className={`modal_holder animated ${openRemindePass ? "show" : ""} `}
      >
        <div className="modal_window" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header">
            <div className="modal_heading">Вхід</div>
            <button
              onClick={() => setOpenRemindePass(false)}
              className="modal_close"
            >
              X
            </button>
          </div>
          <div className="modal_content">
            <div className="auth_modal">
              <form className="auth_modal_form">
                <fieldset className="reset_fieldset">
                  <div className="form_row">
                    <label className="form_label">Ел. пошта або телефон</label>
                    <input
                      type="email"
                      id="auth_email"
                      className="input input_email"
                    />
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Отримати тимчасовий пароль" />
                    <button className="button button_link_modal">
                      Я згадав свій пароль
                    </button>
                  </div>
                </fieldset>
                <span className="auth_modal_devider">або</span>
              </form>

              <AuthModalSocials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
