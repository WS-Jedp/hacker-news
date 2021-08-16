import React from "react"
import { Link } from 'react-router-dom'

import './index.css'

export const Header:React.FC = () => {

    return (
        <header className="header" test-id="header">
            <div className="container header__container">
                <Link tabIndex={0} to="/home" aria-label="Hacker News Link">
                    <h1 className="font-serif">Hacker News</h1>
                </Link>
            </div>
        </header>
    )
}

