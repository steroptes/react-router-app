import React from 'react'
import { Link, Route, Switch } from "react-router-dom";
import productData from '../Data/ProductsList'
import ProductDetails from "./ProductDetails";

const Products = ({match}) => {
    const productList = productData.map((product) => {
      return (
        <li>
          <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
        </li>
      );
    }); 
    return (
      <div className="product-page">
        <div className="product-detail">
          <h2> Products</h2>
          <ul>{productList}</ul>
        </div>
        <Switch>
          <Route
            path={`${match.url}/:productId`}
            render={(props) => <ProductDetails data={productData} {...props} />}
          />
          <Route
            path={`${match.url}`}
            render={() => <h2>Please Select a Product</h2>}
          />
        </Switch>
      </div>
    );
}


export default Products
