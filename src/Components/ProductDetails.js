import React from 'react'

const ProductDetails = ({match,data}) => {
    let productIsHere = data.find(el => el.id == match.params.productId);
    let productDetails;
    if (productIsHere)
      productDetails = 
        <div className="product-description">
          <h2>{productIsHere.name}</h2>
          <p>{productIsHere.description}</p>
          <h5>{productIsHere.status}</h5>
        </div>;
    else {
      productDetails = <h2>Sorry Seems to Be the Hardest Word</h2>;
      console.log(productIsHere)
    }
    return (
      <div>
        {productDetails}
      </div>
    );
}

export default ProductDetails
