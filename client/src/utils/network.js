import axios from 'axios';

const instance = () => axios.create({
    baseURL: 'https://api-vetty-ecommerce.onrender.com',
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

const allServices = () => {
    return instance().get("/services")
}

const allProducts = () => {
    return instance().get("/products")
}

const client = {
    allServices, allProducts
}

export default client