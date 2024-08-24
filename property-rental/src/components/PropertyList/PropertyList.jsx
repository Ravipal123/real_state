import React, { useState, useEffect } from 'react';
import propertiesData from '../../utils/properties.json';
import PropertyCard from '../PropertyCard/PropertyCard';
import FilterBar from '../FilterBar/FilterBar';
import './PropertyList.css';

const PropertyList = ({ onBook }) => {
  const [filteredProperties, setFilteredProperties] = useState(propertiesData);
  const [filters, setFilters] = useState({
    location: "All",
    minPrice: 0,
    maxPrice: 10000,
    bedrooms: "All",
    amenities: []
  });

  useEffect(() => {
    handleFilter(filters);
  }, [filters]);

  const handleFilter = (filters) => {
    let filtered = propertiesData;

    if (filters.location && filters.location !== 'All') {
      filtered = filtered.filter((property) => property.location === filters.location);
    }
    if (filters.minPrice) {
      filtered = filtered.filter((property) => property.price >= parseInt(filters.minPrice, 10));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter((property) => property.price <= parseInt(filters.maxPrice, 10));
    }
    if (filters.bedrooms && filters.bedrooms !== 'All') {
      filtered = filtered.filter((property) => property.bedrooms === parseInt(filters.bedrooms, 10));
    }
    if (filters.amenities.length > 0) {
      filtered = filtered.filter((property) => filters.amenities.every(amenity => property.amenities.includes(amenity)));
    }

    setFilteredProperties(filtered);
  };

  return (
    <div className="container">
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="property-list">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onBook={onBook} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
