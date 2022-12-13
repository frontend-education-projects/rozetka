import AuthModalSocials from "elements/AuthModalSocials/AuthModalSocials";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonModalWindow from "./ButtonModalWindow";

type regestrationProp = {
  openRegestration: any;
  setOpenRegestration: any;
  setOpen: any;
};

interface IFormsValid {
  email: string;
  firstname: string;
  lastname: string;
  phone: number;
  password: string;
}

const ModalWindowRegestration = ({
  openRegestration,
  setOpenRegestration,
  setOpen,
}: regestrationProp) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setValue,
  } = useForm<IFormsValid>({
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormsValid> = (data: any) => {
    alert(JSON.stringify(data));
    reset();
  };

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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="auth_modal_form"
              >
                <fieldset className="reset_fieldset">
                  <div className="form_row">
                    <label className="form_label">Ім'я</label>
                    <input
                      {...register("firstname", {
                        required: "Введіть своє ім'я кирилицею",
                        pattern: {
                          value:
                            /^[аАбБвВгГдДеЕёЁжЖзЗиИіІйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/,
                          message: "Введіть своє ім'я кирилицею",
                        },
                      })}
                      type="text"
                      id="auth_name"
                      className="input input_email"
                    />
                    {errors?.firstname && (
                      <p className="error_message">
                        <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                        {errors?.firstname?.message}
                      </p>
                    )}
                  </div>

                  <div className="form_row">
                    <label className="form_label">Прізвище</label>
                    <input
                      {...register("lastname", {
                        required: "Введіть своє прізвище кирилицею",
                        pattern: {
                          value:
                            /^[аАбБвВгГдДеЕёЁжЖзЗиИіІйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/,
                          message: "Введіть своє прізвище кирилицею",
                        },
                      })}
                      type="text"
                      id="auth_lastname"
                      className="input "
                    />
                    {errors?.lastname && (
                      <p className="error_message">
                        <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                        {errors?.lastname?.message}
                      </p>
                    )}
                  </div>

                  <div className="form_row">
                    <label className="form_label">Номер телефону</label>
                    <input
                      {...register("phone", {
                        required: "Введіть номер мобільного телефону",
                        pattern: {
                          value:
                            /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/g,
                          message:
                            "Введіть коректний номер мобільного телефону",
                        },
                      })}
                      type="phone"
                      placeholder="+380"
                      id="auth_phone"
                      className="input"
                    />
                    {errors?.phone && (
                      <p className="error_message">
                        <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                        {errors?.phone?.message}
                      </p>
                    )}
                  </div>

                  <div className="form_row">
                    <label className="form_label">Ел. пошта або телефон</label>
                    <input
                      {...register("email", {
                        required:
                          "Введено невірну адресу ел. пошти або номер телефону",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
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

                  <label className="form_label">Придумайте пароль</label>
                  <div className="form_row form_row_password">
                    <input
                      {...register("password", {
                        required: "Придумайте пароль",
                        minLength: {
                          value: 6,
                          message: "Не менше 6 символів",
                        },
                      })}
                      type={type}
                      id="auth_password"
                      className="input input_password"
                    />
                    <button onClick={handleToggle} className="password_blind">
                      <i className={`fa-solid fa-${icon}`}></i>
                    </button>
                  </div>
                  {errors?.password && (
                    <p className="error_message error_message_password">
                      <i className="error_icon_password error_icon_reg fa-solid fa-triangle-exclamation"></i>
                      {errors?.password?.message}
                    </p>
                  )}

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
                    <ButtonModalWindow
                      entry="Зареєструватися"
                      isValid={!isValid}
                    />
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
