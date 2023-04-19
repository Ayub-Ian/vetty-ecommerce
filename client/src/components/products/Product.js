/*import React, { useEffect, useState } from 'react'
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

export default Products*/

import { Link } from "react-router-dom";

const Product = ({product}) => {
    return ( 
        <>
            <div className="md:flex ">
                {product.product_items && product.product_items.slice(0, 4).map((product_item) => (
                    <div key={product_item.id} className='md:mr-6 my-6 bg-green-100 p-4 rounded-lg'>
                        <div className="w-full">
                            <img className="rounded-xl " src={product_item.image_url} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{product_item.name}</h3>
                            <p className="my-1">{product_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                            <h4 className="text-green-500 font-medium">Ksh {product_item.price}</h4>
                            <div className="my-4 flex justify-between">
                                <Link to={`/product_item/${product_item.id}`} className="w-full bg-yellow-500 hover:bg-gray-800 font-medium text-center hover:text-white duration-300 py-3 px-4 rounded-lg">
                                    Add To Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Product;