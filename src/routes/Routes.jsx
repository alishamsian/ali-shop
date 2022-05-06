import React from 'react'
import {Switch , Route} from 'react-router-dom'
import Home from '../page/Home'
import Product from '../page/Product'
import Catalog from '../page/Catalog'
import Cart from '../page/Cart'

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/catalog/:slug" component={Product} />
        <Route path="/catalog" component={Catalog} />
        <Route path="/cart" component={Cart} />
    </Switch>
  )
}

export default Routes