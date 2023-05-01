import React, { Fragment } from "react";
import ProductItem from "./ProductItem";

function ProductList({ products, handleDelete, onUpdateData={onUpdateData} }) {
  return (
    <Fragment>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} handleDelete={handleDelete} onUpdateData={onUpdateData} />
      ))}
    </Fragment>
  );
}

export default ProductList;
