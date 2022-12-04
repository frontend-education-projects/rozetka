import AuthModalSocials from 'elements/AuthModalSocials/AuthModalSocials'
import React from 'react'

type OpenProps = {
    open: any
    setOpen:any
}

export const ModalWindow = ({open,setOpen}:OpenProps) => {
  return (
    <>
    <div className={`modal_holder animated ${open ? 'show' : ''} `}>
        <div className='modal_window'>
            <div className='modal_header'>
                <div className='modal_heading'>Вхід</div>
                <button onClick={() => setOpen(false)} className='modal_close'>X</button>
            </div>
            <div className='modal_content'>
              <div className='auth_modal'>

                <form className='auth_modal_form'>
                  <fieldset className='reset_fieldset'>
                    <div className='form_row'>
                      <label className='form_label'> Ел. пошта або телефон </label>
                      <input type="email" id='auth_email' className='input input_email' />
                    </div>

                    <div className='form_row'>
                      <label className='form_label'> Пароль </label>
                      <input type="password" id='auth_password' className='input input_password' />
                    </div>

                  <div className='auth_modal_restore'>
                    <input className='remember_checkbox' type="checkbox" />
                    <label className='auth_modal_remember_checkbox'>Запам'ятати мене</label>

                    <a className='auth_modal_link' href="">Нагадати пароль</a>
                  </div>

                  <div className='form_row button_center'>
                    <button className='button button_auth_modal'>Увійти</button>
                    <button className='button button_link_modal'>Зареєструватися</button>
                  </div>

                  </fieldset>
                  <span className='auth_modal_devider'>або</span>
                </form>

                  <AuthModalSocials />

              </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default ModalWindow
