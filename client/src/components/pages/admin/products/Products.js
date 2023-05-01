import React, { useEffect, useState } from "react";
import "./products.scss";
import AdminLayout from "../layout/Layout";
import AddProduct from "./AddProduct";
import client from "../../../../utils/network";
import UpdateProduct from "./UpdateProduct";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function AdminProducts() {
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)

  const getProducts = async () => {
    setLoading(true)
    try {
      const res = await client.allProducts()
      setProducts(res.data)
    } catch (error) {
      setError(error.response.data)
    }
    setLoading(false)
  }


  const handleDelete = async (id) => {

    setLoading(true)
    try {
      const res = await client.deleteProduct(id)
      handleProductDelete(id)
    } catch (error) {
      setError(error.response.data)
    }
    setLoading(false)
  }
 
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

    // Updates messages after delete button is clicked
    function handleProductDelete(id) {
      const updatedProducts = products.filter(product => product.id !== id )
      setProducts(updatedProducts)
    }

    const handleUpdateProduct = (updatedProduct) => {
      const updatedProducts = products.map(product => {
        if (product.id === updatedProduct.id) {
          return updatedProduct
        } else {
          return product
        }
      })
      setProducts(updatedProducts)
    }

  useEffect(() => {
    getProducts()
  }, [])

  console.log({products})
  
  return (
    <AdminLayout>
      <div className="container">
        <h2>All products</h2>
        
        <AddProduct setLoading={setLoading} setError={setError} onAddProduct={handleAddProduct} />
        {loading ? (
        <div>Fetching all services. Please wait...</div>
      ) : (
        <table className="styled-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {!products ? (
                <tr>
                  <td>
                  No available products
                  </td>
                  
                  </tr>
              ) : (
                
               <ProductList products={products} handleDelete={handleDelete} onUpdateData={handleUpdateProduct} />
              )}
                </tbody>
    </table>
      )}

      </div>
    </AdminLayout>
  );
}

export default AdminProducts;
