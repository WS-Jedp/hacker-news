import React, { useState, useEffect } from 'react'
import { MouseEventHandler } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GET_NEWS_OPTIONS } from '../../../utils/news'
import { Option } from '../option'

import './index.css'


interface Select {
    text: string,
    value?: string | null,
    openState: boolean,
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>
}

export const Select:React.FC<Select> = ({ text, children, value = null, openState = true, setOpenState }) => {

    const [isOpen, setIsOpen] = useState<boolean>(openState)

    // Detecting and reacting to the change of the open state
    useEffect(() => {
        setIsOpen(openState)
    }, [openState])

    const handleSelect:MouseEventHandler = (ev) => {
        ev.preventDefault()
        setIsOpen(!isOpen)
        setOpenState(!isOpen)
    }


    return (
        <div className="select-container">
            <article onClick={handleSelect} aria-label={text} className="custom-select">
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
            </article>

            <div className={`select-options ${isOpen ? 'select-options--open' : 'select-options--close'}`}>
                {
                    children
                }
            </div>
        </div>

    )
}