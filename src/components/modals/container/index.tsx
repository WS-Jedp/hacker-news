import React from 'react'
import { createPortal } from 'react-dom'

import './index.css'

const el = window.document.querySelector('#modal') as HTMLElement

export const ModalContainer:React.FC = ({ children }) => {
    return createPortal((
            <section className="modal-container">
                {
                    children
                }
            </section>
        ),
        el
    )
}
