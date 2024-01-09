import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import './Hotels.css';

const HotelDetail = ({ hotelData }) => {
  const navigate = useNavigate();
  const { id } = useParams(); 

  const hotel = hotelData.find((h) => h.id === parseInt(id));

  if (!hotel) {
    return <p>Hotel not found!</p>;
  }

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div id='HotelDetailsContainer'>
      <h2>{hotel.name}</h2>
      <img id='HDimg' src={hotel.image} alt={hotel.name} />
      <p>{hotel.location}</p>
      <p>{hotel.price} TL / Night</p>
      <p>{hotel.description}</p>

      <h3>Rooms</h3>
      <ul>
        {hotel.rooms.map((room) => (
          <li key={room.id}>
            <p>{room.type}</p>
            <p>Capacity: {room.capacity}</p>
            <p>Price: {room.price} TL / Night</p>
          </li>
        ))}
      </ul>
      <button id='ReturnToHomepage' onClick={handleGoBack}>Return to Homepage</button>
    </div>
  );
};

export default HotelDetail;