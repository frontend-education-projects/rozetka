import AuthModalSocials from "elements/AuthModalSocials/AuthModalSocials";
import React, { useState } from "react";
import ButtonModalWindow from "./ButtonModalWindow";
import ModalWindowRegestration from "./ModalWindowRegestration";
import { ModalWindowRemindPass } from "./ModalWindowRemindPass";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormsValid {
  email: string;
  password: string;
}

type OpenProps = {
  open: any;
  setOpen: any;
  openRemindePass: any;
  setOpenRemindePass: any;
  openRegestration: any;
  setOpenRegestration: any;
};

export const ModalWindow = ({
  open,
  setOpen,
  openRemindePass,
  setOpenRemindePass,
  openRegestration,
  setOpenRegestration,
}: OpenProps) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("eye-slash");

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (type === "password") {
      setIcon("eye");
      setType("text");
    } else {
      setIcon("eye-slash");
      setType("password");
    }
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormsValid>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormsValid> = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <>
      <ModalWindowRemindPass
        openRemindePass={openRemindePass}
        setOpenRemindePass={setOpenRemindePass}
        setOpen={setOpen}
      />
      <ModalWindowRegestration
        openRegestration={openRegestration}
        setOpenRegestration={setOpenRegestration}
        setOpen={setOpen}
      />
      <div
        onClick={() => setOpen(false)}
        className={`modal_holder animated ${open ? "show" : ""} `}
      >
        <div className="modal_window" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header">
            <div className="modal_heading">Вхід</div>
            <button onClick={() => setOpen(false)} className="modal_close">
              X
            </button>
          </div>
          <div className="modal_content">
            <div className="auth_modal">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="auth_modal_form"
              >
                <fieldset className="reset_fieldset">
                  <div className="form_row">
                    <label className="form_label">Ел. пошта або телефон</label>
                    <input
                      {...register("email", {
                        required:
                          "Введено невірну адресу ел. пошти або номер телефону",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message:
                            "Введіть коректну ел. пошту або номер телефона",
                        },
                      })}
                      type="email"
                      id="auth_email"
                      className="input input_email"
                    />
                    {errors?.email && (
                      <p className="error_message">
                        <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                        {errors?.email?.message}
                      </p>
                    )}
                  </div>

                  <label className="form_label"> Пароль </label>
                  <div className="form_row form_row_password">
                    <input
                      {...register("password", {
                        required: true,
                      })}
                      type={type}
                      id="auth_password"
                      className="input input_password"
                    />
                    {errors?.password && (
                      <i className="error_icon_password fa-solid fa-triangle-exclamation"></i>
                    )}
                    <button onClick={handleToggle} className="password_blind">
                      <i className={`fa-solid fa-${icon}`}></i>
                    </button>
                  </div>

                  <div className="auth_modal_restore">
                    <input
                      className="remember_checkbox"
                      type="checkbox"
                      id="rememberMe"
                    />
                    <label
                      htmlFor={"rememberMe"}
                      className="auth_modal_remember_checkbox"
                    >
                      Запам'ятати мене
                    </label>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenRemindePass(true);
                        setOpen(false);
                      }}
                      className="auth_modal_link"
                    >
                      Нагадати пароль
                    </button>
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Увійти" isValid={!isValid} />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenRegestration(true);
                        setOpen(false);
                      }}
                      className="button button_link_modal"
                    >
                      Зареєструватися
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

export default ModalWindow;
