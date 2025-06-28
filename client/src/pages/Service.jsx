import React, { useEffect, useState } from 'react';

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/data/service`) // replace with your backend URL
      .then(res => res.json())
      .then(data => setServices(data.msg))
      .catch(err => console.log('Error fetching services:', err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map(service => (
          <div
            key={service._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src="/images/design.png" // dynamic image
              alt={service.service}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-indigo-600">
                {service.service}
              </h2>
              <p className="text-gray-700 mb-3">{service.description}</p>
              <p className="text-sm text-gray-500 mb-1">
                <strong>Provider:</strong> {service.provider}
              </p>
              <p className="text-sm text-gray-500">
                <strong>Price:</strong> ₹{service.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
