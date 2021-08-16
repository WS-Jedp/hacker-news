import React from 'react'
import { NavLink } from 'react-router-dom'

import './index.css'

interface Label {
    to: string,
    text: string
}

export const Label:React.FC<Label> = ({ to, text }) => {

    return (
        <NavLink to={to} className="label" activeClassName="label--selected">
            {
                text
            }
        </NavLink>
    )
}