import AuthModalSocials from "elements/AuthModalSocials/AuthModalSocials";
import React from "react";
import ButtonModalWindow from "./ButtonModalWindow";

type regestrationProp = {
  openRegestration: any;
  setOpenRegestration: any;
  setOpen: any;
};

const ModalWindowRegestration = ({
  openRegestration,
  setOpenRegestration,
  setOpen,
}: regestrationProp) => {
  return (
    <>
      <div
        onClick={() => setOpenRegestration(false)}
        className={`modal_holder animated ${openRegestration ? "show" : ""} `}
      >
        <div className="modal_window" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header">
            <div className="modal_heading">Реєстрація</div>
            <button
              onClick={() => setOpenRegestration(false)}
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
                    <label className="form_label">Ім'я</label>
                    <input
                      type="text"
                      id="auth_name"
                      className="input input_email"
                    />
                  </div>

                  <div className="form_row">
                    <label className="form_label">Прізвище</label>
                    <input
                      type="text"
                      id="auth_surname"
                      className="input input_email"
                    />
                  </div>

                  <div className="form_row">
                    <label className="form_label">Номер телефону</label>
                    <input
                      type="number"
                      placeholder="+380"
                      id="auth_surname"
                      className="input input_email"
                    />
                  </div>

                  <div className="form_row">
                    <label className="form_label">Ел. пошта або телефон</label>
                    <input
                      type="email"
                      id="auth_email"
                      className="input input_email"
                    />
                  </div>

                  <div className="form_row">
                    <label className="form_label">Придумайте пароль</label>
                    <input
                      type="password"
                      id="auth_password"
                      className="input input_password"
                    />
                  </div>

                  <div className="form_cation">
                    Реєструючись, ви погоджуєтеся з
                    <a className="caption_link" href="/">
                      умовами положення про обробку і захист персональних даних
                    </a>
                    та
                    <a className="caption_link" href="/">
                      угодою користувача
                    </a>
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Зареєструватися" />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenRegestration(false);
                        setOpen(true);
                      }}
                      className="button button_link_modal"
                    >
                      Я вже зареєстрований
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

export default ModalWindowRegestration;
