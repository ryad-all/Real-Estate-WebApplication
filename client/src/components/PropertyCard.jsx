import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';



const PropertyCard = ({ property }) => {
  const {
    img_url,
    size,
    price,
    bedrooms,
    bathrooms,
    h_type,
    s_type,
    address,
  } = property;

  const bedroomsTextLength = `${bedrooms} Bedrooms`.length;
  const bathroomsTextLength = `${bathrooms} Bathrooms`.length;
  const maxLength = Math.max(bedroomsTextLength, bathroomsTextLength);

  const cardWidth = `${2 * maxLength}ch`; // Set width based on character length

  return (
    <div className={`max-w-sm min-h-lg w-full sm:w-full lg:w-full py-6 px-3 ${cardWidth}`}>
      <div className='bg-white shadow-xl rounded-lg overflow-hidden'>
        <div className='bg-cover bg-center h-56 p-4' style={{ backgroundImage: `url(${img_url})` }}>
          <div className='flex justify-end'>
            <BsInfoCircle className='text-2xl text-white fill-current' />
          </div>
        </div>
        <div className='p-4'>
          <p className='uppercase tracking-wide text-sm font-bold text-gray-700'>{`${h_type} • ${size}`}</p>
          <h2 className='text-3xl text-gray-900'>{`$${price}${s_type === 'rent' ? '/month' : ''}`}</h2>
          <p className='text-gray-700'>{`${address.street_number} ${address.street_name}, ${address.postal_code}, ${address.province}, ${address.country}`}</p>
        </div>
        <div className='flex p-4 border-t border-gray-300 text-gray-700'>
          <div className='flex-1 inline-flex items-center'>
          <FaBed className='h-6 w-6 text-gray-600 fill-current mr-3' />
            <p><span className='text-gray-900 font-bold'>{bedrooms}</span> Bedrooms</p>
          </div>
          <div className='flex-1 inline-flex items-center'>
          <FaBath className='h-6 w-6 text-gray-600 fill-current mr-3' />
            <p><span className='text-gray-900 font-bold'>{bathrooms}</span> Bathrooms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;



