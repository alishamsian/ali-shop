import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from '../page/Home'
import Product from '../page/Product'
import Catalog from '../page/Catalog'

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
    </Switch>
  )
}

export default Routes