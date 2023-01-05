import React from 'react'

export const AuthModalSocials = () => {
  return (
    <div className="auth_modal_socials">
      <div className="auth_modal_socials_buttons">
        <div className="auth_modal_socials_label">Увійти як користувач</div>
        <button className="button button_socials">
          <i className="facebookicon fa-brands fa-facebook-f" /> Facebook
        </button>
        <button className="button button_socials button_space">
          <i className="googleicon fa-brands fa-google" /> Google
        </button>
      </div>
    </div>
  )
}
