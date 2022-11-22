import React from 'react'

type OpenProps = {
    open: any
    setOpen:any
}

export const ModalWindow = ({open,setOpen}:OpenProps) => {
  return (
    <button onClick={() => setOpen(false)} className={`modal_holder animated ${open ? 'show' : ''} `}>
        <div className='modal_window'>
            <div className='modal_header'>
                <div className='modal_heading'>Вхід</div>
                <button onClick={() => setOpen(false)} className='modal_close'>X</button>
            </div>
            <div className='modal_content'>

            </div>
        </div>
    </button>
  )
}


export default ModalWindow
