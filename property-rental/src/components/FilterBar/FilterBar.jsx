import React, { useState } from 'react';
import './FilterBar.css';

const FilterBar = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [bedrooms, setBedrooms] = useState('');
  const [amenities, setAmenities] = useState([]);

  const handleFilterChange = () => {
    onFilter({
      location,
      priceRange,
      bedrooms,
      amenities,
    });
  };

  const handleClearFilters = () => {
    setLocation('');
    setPriceRange([0, 500]);
    setBedrooms('');
    setAmenities([]);
    onFilter({
      location: '',
      priceRange: [0, 500],
      bedrooms: '',
      amenities: [],
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          <option value="City Center">City Center</option>
          <option value="Countryside">Countryside</option>
          <option value="Suburban">Suburban</option>
        </select>
      </div>
      <div className="filter-group price-range">
        <label htmlFor="price-start">Price Range:</label>
        <input
          type="number"
          id="price-start"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          min="0"
        />
        -
        <input
          type="number"
          id="price-end"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          min="0"
        />
      </div>
      <div className="filter-group">
        <label htmlFor="bedrooms">Bedrooms:</label>
        <select
          id="bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
        >
          <option value="">Select Bedroom</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
        </select>
      </div>
      <div className="filter-group">
        <label>Amenities:</label>
        <label><input type="checkbox" value="Pool" checked={amenities.includes('Pool')} onChange={(e) => {
          const newAmenities = e.target.checked ? [...amenities, 'Pool'] : amenities.filter(amenity => amenity !== 'Pool');
          setAmenities(newAmenities);
        }} /> Pool</label>
        <label><input type="checkbox" value="Gym" checked={amenities.includes('Gym')} onChange={(e) => {
          const newAmenities = e.target.checked ? [...amenities, 'Gym'] : amenities.filter(amenity => amenity !== 'Gym');
          setAmenities(newAmenities);
        }} /> Gym</label>
        <label><input type="checkbox" value="Fireplace" checked={amenities.includes('Fireplace')} onChange={(e) => {
          const newAmenities = e.target.checked ? [...amenities, 'Fireplace'] : amenities.filter(amenity => amenity !== 'Fireplace');
          setAmenities(newAmenities);
        }} /> Fireplace</label>
      </div>
      <div className="filter-bar-buttons">
        <button id="apply-filters" onClick={handleFilterChange}>Apply Filters</button>
        <button id="clear-filters" onClick={handleClearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default FilterBar;
