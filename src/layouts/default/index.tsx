import React from 'react'
import { Header } from '../../components/header'

export const Layout:React.FC = ({ children }) => {

    return (
        <>
            <Header />
            <section className="container">
                {
                    children
                }
            </section>
        </>
    )
}