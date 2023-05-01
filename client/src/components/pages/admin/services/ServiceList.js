import React from 'react'
import ServiceItem from './ServiceItem'

function ServiceList({ services, handleDelete, onUpdateData={onUpdateData} }) {
  return (
    <tbody>
    {services.map((service) => (
<ServiceItem service={service} handleDelete={handleDelete} onUpdateData={onUpdateData} />
    ))}
  </tbody>
  )
}

export default ServiceList