import React from 'react'
import { Link, Route } from 'react-router-dom';

const Category = (props) => {
    return (
      <div>
        <h1>This is the category Page</h1>
        <ul>
          <Link to={`${props.match.url}/shoes`}>
            <li>Shoes</li>
          </Link>
          <Link to={`${props.match.url}/boots`}>
            <li>Boots</li>
          </Link>
          <Link to={`${props.match.url}/footwear`}>
            <li>FootWear</li>
          </Link>
        </ul>
        <Route
          path={`${props.match.path}/:name`}
          render={(props) => (
            <div>
              <h2> {props.match.params.name}</h2>{" "}
            </div>
          )}
        ></Route>
      </div>
    );
}

export default Category
