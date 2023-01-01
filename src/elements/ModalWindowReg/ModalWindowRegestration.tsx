/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthModalSocials } from 'src/elements/AuthModalSocials/AuthModalSocials'

import { ButtonModalWindow } from './ButtonModalWindow'

type regestrationProp = {
  openRegestration: boolean
  setOpenRegestration: React.Dispatch<React.SetStateAction<boolean>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormsValid {
  email: string
  firstname: string
  lastname: string
  phone: number
  password: string
}

export const ModalWindowRegestration = ({ openRegestration, setOpenRegestration, setOpen }: regestrationProp) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormsValid>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IFormsValid> = (data: IFormsValid) => {
    alert(JSON.stringify(data))
    reset()
  }

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState('eye-slash')

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (type === 'password') {
      setIcon('eye')
      setType('text')
    } else {
      setIcon('eye-slash')
      setType('password')
    }
  }

  const handlerCloseRegestrationWindow = () => {
    setOpenRegestration(false)
  }

  const handlerStopPropagationWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerCloseXRegestrationWindow = () => {
    setOpenRegestration(false)
  }

  const handlerAllreadyRegister = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenRegestration(false)
    setOpen(true)
  }

  return (
    <>
      <div
        className={`modal_holder animated ${openRegestration ? 'show' : ''} `}
        onClick={handlerCloseRegestrationWindow}
      >
        <div className="modal_window" onClick={handlerStopPropagationWindow}>
          <div className="modal_header">
            <div className="modal_heading">Реєстрація</div>
            <button className="modal_close" onClick={handlerCloseXRegestrationWindow}>
              X
            </button>
          </div>
          <div className="modal_content">
            <div className="auth_modal">
              <form className="auth_modal_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="reset_fieldset">
                  <div className="form_row">
                    <label className="form_label">Ім`я</label>
                    <input
                      {...register('firstname', {
                        required: "Введіть своє ім'я кирилицею",
                        pattern: {
                          value: /^[аАбБвВгГдДеЕёЁжЖзЗиИіІйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/,
                          message: "Введіть своє ім'я кирилицею",
                        },
                      })}
                      className="input input_email"
                      type="text"
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
                      {...register('lastname', {
                        required: 'Введіть своє прізвище кирилицею',
                        pattern: {
                          value: /^[аАбБвВгГдДеЕёЁжЖзЗиИіІйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/,
                          message: 'Введіть своє прізвище кирилицею',
                        },
                      })}
                      className="input "
                      type="text"
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
                      {...register('phone', {
                        required: 'Введіть номер мобільного телефону',
                        pattern: {
                          // eslint-disable-next-line no-useless-escape
                          value: /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/g,
                          message: 'Введіть коректний номер мобільного телефону',
                        },
                      })}
                      className="input"
                      placeholder="+380"
                      type="phone"
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
                      {...register('email', {
                        required: 'Введено невірну адресу ел. пошти або номер телефону',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                          message: 'Введіть коректну ел. пошту або номер телефона',
                        },
                      })}
                      className="input input_email"
                      type="email"
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
                      {...register('password', {
                        required: 'Придумайте пароль',
                        minLength: {
                          value: 6,
                          message: 'Не менше 6 символів',
                        },
                      })}
                      className="input input_password"
                      type={type}
                    />
                    <button className="password_blind" onClick={handleToggle}>
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
                    <a className="caption_link" href="/" target="_blank">
                      умовами положення про обробку і захист персональних даних
                    </a>
                    та
                    <a className="caption_link" href="/" target="_blank">
                      угодою користувача
                    </a>
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Зареєструватися" isValid={!isValid} />
                    <button className="button button_link_modal" onClick={handlerAllreadyRegister}>
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
  )
}
