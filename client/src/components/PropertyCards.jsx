import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const PropertyCards = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4; // Number of properties per page

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:3000/properties')
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Logic for pagination
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center"> {/* Center content vertically */}
      <div className="flex flex-row justify-center">
        {currentProperties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
      <div className="flex mt-4"> {/* Add margin top and horizontally align pagination */}
        {Array.from({ length: Math.ceil(properties.length / propertiesPerPage) }, (_, index) => index + 1).map((pageNumber) => (
          <button key={pageNumber} onClick={() => paginate(pageNumber)} className={`px-4 py-2 mx-2 ${pageNumber === currentPage ? 'bg-gray-600 text-white' : 'bg-white border border-gray-300'}`}>
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );  
};

export default PropertyCards;
