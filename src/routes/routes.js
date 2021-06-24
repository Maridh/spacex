import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Passados from '../pages/Passados'
import Proximos from '../pages/Proximos'
import Futuro from '../pages/Futuro'
import Realizado from '../pages/Realizado'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Passados' component={Passados} />
                <Route path='/Proximos' component={Proximos} />
                <Route path='/Futuro' component={Futuro} />
                <Route path='/Realizado' component={Realizado} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas