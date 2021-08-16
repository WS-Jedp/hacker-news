import React from 'react'
import { MouseEventHandler } from 'react'
import { ICONS } from '../../../utils/types'

import './index.css'

interface Option {
    image: string,
    srcSet?: string
    text: string,
    onClick: MouseEventHandler
}

export const Option:React.FC<Option> = ({ image, srcSet, text, onClick }) => {

    return (
        <button onClick={onClick} tabIndex={0} aria-label={text} className="option-input">
            <figure aria-label={text} tabIndex={-1}>
                <img src={image} srcSet={srcSet} alt={text} />
            </figure>
            <span>
                {
                    text
                }
            </span>
        </button>
    )

}