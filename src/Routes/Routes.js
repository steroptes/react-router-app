import React, { Fragment } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from "../Components/Home";
import Category from "../Components/Category";
import Products from "../Components/Products";
import AdminLoginArea from "../Components/AdminLoginArea"
import AdminArea from "../Components/AdminArea";

const Routes = () => {
    return (
      <Fragment>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={AdminLoginArea} />
          <Route path="/admin" component={AdminArea} />
        </Switch>
      </Fragment>
    );
}

export default Routes
