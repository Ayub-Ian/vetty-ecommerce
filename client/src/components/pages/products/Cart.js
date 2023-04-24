import { useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const Cart = () => {
    const { id } = useParams()
    const {data: product, loading} = UseFetch("http://localhost:3000/" + id)

    console.log(product.id)

    return ( 
        <>
            <div>
                {loading && <h3>Loading data...</h3>}
                {product.product_items && product.product_items.map((product_item) => (
                    <div key={product_item.id} className='md:mr-6 my-6 bg-green-100 p-2 rounded-lg'>
                        <div className="w-full">
                            <img className="rounded-xl " src={product_item.image_url} alt="" />
                        </div>
                        <div className="py-2 px-3">
                            <h3 className="text-gray-700 md:text-xl text-lg font-semibold">{product_item.name}</h3>
                            <p className="my-1">{product_item.description.split(/\s+/).slice(0, 16).join(" ")}</p>
                            <h4 className="text-green-500 font-medium">Ksh {product_item.price}</h4>
                            <div className="my-4 flex justify-between">
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Cart;