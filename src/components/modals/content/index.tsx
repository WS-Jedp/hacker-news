import React, { MouseEventHandler } from 'react'

import './index.css'

interface ModalContent {
    onClose: () => void,
    title: string,
}

export const ModalContent:React.FC<ModalContent> = ({ onClose, title, children }) => {

    const handleOnClose:MouseEventHandler = (ev) => {
        ev.preventDefault()
        onClose()
    }

    return (
        <article className="modal-content">
            <h1>
                { title }
            </h1>
            {
                children
            }
            <button className="modal-content__button" onClick={handleOnClose}>
                Close
            </button>
        </article>
    )
} 