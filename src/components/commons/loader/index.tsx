import React from 'react'
import './index.css'

export const Loader:React.FC = () => (
    <div className="loader">
        <div className="loader__square loader__square--first"></div>
        <div className="loader__square loader__square--second"></div>
    </div>
)
