import React from 'react'
import ReactDOM from 'react-dom'

import { Router } from './routes'
import { ContextProvider } from './context/general'

import './styles/index.css'



ReactDOM.render(
    <ContextProvider>
        <Router />
    </ContextProvider>, 
    window.document.getElementById('app')
)
