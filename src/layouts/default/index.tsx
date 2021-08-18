import React from 'react'
import { Header } from '../../components/header'
import { Label } from '../../components/labels'

import './index.css'

export const Layout:React.FC = ({ children }) => {

    return (
        <>
            <Header />
            <section className="container layout-container">
                <nav className="layout-container__nav">
                    <Label 
                        text="All"
                        to="home"
                    />
                    <Label 
                        text="Favs"
                        to="favs"
                    />
                </nav>
                {
                    children
                }
            </section>
        </>
    )
}