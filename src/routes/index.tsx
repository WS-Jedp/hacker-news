import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

export const Router:React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favs" component={Favorites} />
            </Switch>
        </BrowserRouter>
    )
}