import React, { useState } from 'react'
import { MouseEventHandler } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GET_NEWS_OPTIONS } from '../../../utils/news'
import { Option } from '../option'

import './index.css'


interface Select {
    text: string,
    value?: string | null
}

export const Select:React.FC<Select> = ({ text, children, value = null }) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleSelect:MouseEventHandler = (ev) => {
        ev.preventDefault()
        setIsOpen(!isOpen)
    }


    return (
        <div className="select-container">
            <button onClick={handleSelect} aria-label={text} className="custom-select">
                {
                    value ? (
                        <Option 
                            { ...GET_NEWS_OPTIONS(value) }
                            onClick={() => {}}
                        />
                    ) : (
                        <>
                        <span>
                            {
                                text
                            }
                        </span>
                        <MdKeyboardArrowDown tabIndex={-1} />
                        </>
                    )
                }
            </button>

            <div className={`select-options ${isOpen ? 'select-options--open' : 'select-options--close'}`}>
                {
                    children
                }
            </div>
        </div>

    )
}