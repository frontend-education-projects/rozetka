/* eslint-disable @typescript-eslint/no-misused-promises */
import { AuthModalSocials } from '@elements/AuthModalSocials/AuthModalSocials'
import clsx from 'clsx'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { ButtonModalWindow } from './ButtonModalWindow'

type ModalWindowRemindPassProps = {
  openRemindePass: boolean
  setOpenRemindePass: (isOpenRemindePass: boolean) => void
  setOpen: (isOpen: boolean) => void
}

interface IFormsValid {
  email: string
}

export const ModalWindowRemindPass = ({ openRemindePass, setOpenRemindePass, setOpen }: ModalWindowRemindPassProps) => {
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

  const handleCloseWindow = () => {
    setOpenRemindePass(false)
  }

  const handlerCloseRemindeWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenRemindePass(false)
    setOpen(true)
  }

  return (
    <>
      <div className={clsx('modal_holder', openRemindePass ? 'show_holder' : '')} onClick={handleCloseWindow}></div>
      <div className={clsx('modal_window', openRemindePass ? 'show_window' : '')}>
        <div className="modal_header">
          <div className="modal_heading">Вхід</div>
          <button className="modal_close" onClick={handleCloseWindow}>
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
    </>
  )
}
