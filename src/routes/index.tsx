import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

export const Router:React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/favs" component={Favorites} />
                <Redirect to="/home" />
            </Switch>
        </BrowserRouter>
    )
}