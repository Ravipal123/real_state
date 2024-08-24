import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyCard.css';

const PropertyCard = ({ property, onBook }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    onBook(property);
    navigate('/cart');
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="card-content">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <p ><span className='sub'>Location:</span> {property.location}</p>
        <p ><span className='sub'>Price:</span> ${property.price}</p>
        <p ><span className='sub'>Bedrooms:</span> {property.bedrooms}</p>
        <p ><span className='sub'>Amenities:</span>{property.amenities}</p>
        <button onClick={handleBookNow}>Book Now</button>
      </div>  
    </div>
  );
};

export default PropertyCard;
