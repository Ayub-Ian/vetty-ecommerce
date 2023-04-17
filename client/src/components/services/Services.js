import React, { useEffect, useState } from 'react'
import client from '../../utils/network'

function Services() {
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // GET request for all services
    const getServices = async () => {
        setLoading(true)
        try {
            const response = await client.allServices();
            setServices(response.data)
        } catch (error) {
            setError(JSON.stringify(error.response.data))
        }
        setLoading(false)
    }
    

    useEffect(() => {
        getServices();
    }, [])

    


  return (
    <div>Services</div>
  )
}

export default Services