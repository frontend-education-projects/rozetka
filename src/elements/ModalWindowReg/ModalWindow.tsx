/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AuthModalSocials } from 'src/elements/AuthModalSocials/AuthModalSocials'

import { ButtonModalWindow } from './ButtonModalWindow'
import { ModalWindowRegestration } from './ModalWindowRegestration'
import { ModalWindowRemindPass } from './ModalWindowRemindPass'

interface IFormsValid {
  email: string
  password: string
}

type OpenProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  openRemindePass: boolean
  setOpenRemindePass: React.Dispatch<React.SetStateAction<boolean>>
  openRegestration: boolean
  setOpenRegestration: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalWindow = ({
  open,
  setOpen,
  openRemindePass,
  setOpenRemindePass,
  openRegestration,
  setOpenRegestration,
}: OpenProps) => {
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

  const handlerCloseModalWindow = () => {
    setOpen(false)
  }

  const handlerCloseXModalWindow = () => {
    setOpen(false)
  }

  const handlerStopPropagationWindow = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const handlerOpenRemindeWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenRemindePass(true)
    setOpen(false)
  }
  const handlerOpenRegestrationWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenRegestration(true)
    setOpen(false)
  }

  return (
    <>
      <ModalWindowRemindPass
        openRemindePass={openRemindePass}
        setOpen={setOpen}
        setOpenRemindePass={setOpenRemindePass}
      />
      <ModalWindowRegestration
        openRegestration={openRegestration}
        setOpen={setOpen}
        setOpenRegestration={setOpenRegestration}
      />
      <div className={`modal_holder animated ${open ? 'show' : ''} `} onClick={handlerCloseModalWindow}>
        <div className="modal_window" onClick={handlerStopPropagationWindow}>
          <div className="modal_header">
            <div className="modal_heading">Вхід</div>
            <button className="modal_close" onClick={handlerCloseXModalWindow}>
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
                          value: /^\S+@\S+\.\S+$/,
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

                  <label className="form_label"> Пароль </label>
                  <div className="form_row form_row_password">
                    <input
                      {...register('password', {
                        required: true,
                      })}
                      className="input input_password"
                      type={type}
                    />
                    {errors?.password && <i className="error_icon_password fa-solid fa-triangle-exclamation"></i>}
                    <button className="password_blind" onClick={handleToggle}>
                      <i className={`fa-solid fa-${icon}`}></i>
                    </button>
                  </div>

                  <div className="auth_modal_restore">
                    <input className="remember_checkbox" id="rememberMe" type="checkbox" />
                    <label className="auth_modal_remember_checkbox" htmlFor={'rememberMe'}>
                      Запам`ятати мене
                    </label>

                    <button className="auth_modal_link" onClick={handlerOpenRemindeWindow}>
                      Нагадати пароль
                    </button>
                  </div>

                  <div className="form_row button_center">
                    <ButtonModalWindow entry="Увійти" isValid={!isValid} />
                    <button className="button button_link_modal" onClick={handlerOpenRegestrationWindow}>
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
  )
}
