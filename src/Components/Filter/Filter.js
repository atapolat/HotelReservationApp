import React, { useEffect, useState } from 'react';
import './Filter.css';
import hotelss from '../../Data/hotels.json';
import LocationList from './LocationList';

const hotelsData = hotelss;

function Filter({ checkedList, setCheckedList }) {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    
    const getCitiesFromData = () => {
      const uniqueCities = new Set();
      hotelsData.forEach((hotel) => {
        const city = hotel.location.split(",")[0].trim();
        uniqueCities.add(city);
      });
      return Array.from(uniqueCities);
    };

    const cities = getCitiesFromData();
    setCities(cities);
  }, []);

  return (
    <div className="filter-container">
      <h3 className="text-start title">Filter</h3>
      <div className="checklist">
        {cities &&
          cities.map((value, index) => (
            <LocationList
              key={index}
              groups={[value]}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
            />
          ))}
      </div>
    </div>
  );
}

export default Filter;
