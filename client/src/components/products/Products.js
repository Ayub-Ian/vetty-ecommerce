import React, { useEffect, useState } from 'react'
import client from '../../utils/network'

function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // get request for all products
    const getProducts = async () => {
        setLoading(true)
        try {
            const response = await client.allProducts();
            setProducts(response.data)
        } catch (error) {
            setError(JSON.stringify(error.response.data))
        }
        setLoading(false)
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    
  return (
    <div>Products</div>
  )
}

export default Products