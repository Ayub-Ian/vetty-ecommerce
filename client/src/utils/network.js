import axios from 'axios';
import { getToken } from './auth';

const instance = () => axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${getToken()}`
    }
})

const register = (data) => {
    return instance().post("/register", data)
}

const login = (data) => {
    return instance().post("/login", data)
}

const logout = () => {
    return instance().delete("/logout")
}


// GET methods 
const allServices = () => {
    return instance().get("/services")
}

const allProducts = () => {
    return instance().get("/products")
}

// POST methods 

const addService = (data) => {
    return instance().post("/services", data)
}

const addProduct = (data) => {
    return instance().post("/products", data)
}

// DELETE methods 

const deleteProduct = (id) => {
    return instance().delete(`/products/${id}`)
}

const deleteService = (id) => {
    return instance().delete(`/services/${id}`)
}



//UPDATE methods

const updateProduct = (id, data) => {
    return instance().put(`/products/${id}`, data)
}

const updateService = (id, data) => {
    return instance().put(`/services/${id}`, data)
}

const client = {
    allServices, allProducts, register, login, logout, addProduct, addService, deleteProduct, deleteService, updateProduct, updateService
}

export default client