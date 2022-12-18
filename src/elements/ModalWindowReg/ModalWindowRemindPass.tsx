/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthModalSocials } from 'src/elements/AuthModalSocials/AuthModalSocials'

import { ButtonModalWindow } from './ButtonModalWindow'

type remindePassProp = {
  openRemindePass: boolean
  setOpenRemindePass: React.Dispatch<React.SetStateAction<boolean>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface IFormsValid {
  email: string
}

export const ModalWindowRemindPass = ({ openRemindePass, setOpenRemindePass, setOpen }: remindePassProp) => {
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

  const handlerStopPropagationWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerCloseXWindow = () => {
    setOpenRemindePass(false)
  }

  const handlerCloseRemindeWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenRemindePass(false)
    setOpen(true)
  }

  return (
    <>
      <div className={`modal_holder animated ${openRemindePass ? 'show' : ''} `} onClick={handlerCloseXWindow}>
        <div className="modal_window" onClick={handlerStopPropagationWindow}>
          <div className="modal_header">
            <div className="modal_heading">Вхід</div>
            <button className="modal_close" onClick={handlerCloseXWindow}>
              X
            </button>
          </div>
          <div className="modal_content">
            <div className="auth_modal">
              <form className="auth_modal_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="reset_fieldset">
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

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Отримати тимчасовий пароль" isValid={!isValid} />
                    <button className="button button_link_modal" onClick={handlerCloseRemindeWindow}>
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
  )
}
