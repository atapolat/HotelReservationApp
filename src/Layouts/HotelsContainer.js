import React, { useState } from 'react';
import hotelData from '../Data/hotels.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HotelList from '../Components/Hotels/HotelList';
import HotelDetail from '../Components/Hotels/HotelDetail';
import Navbar from '../Components/Navbar/Navbar';
import Filter from '../Components/Filter/Filter';
import Favorites from '../Components/Favorites/Favorites';
import './Layouts.css';

const hotels = hotelData;

function HotelContainer() {
  const [inputText, setInputText] = useState('');
  const [count, setCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [checkedList, setCheckedList] = useState([]);

  const result = hotels.filter(function (obj) {
    if (checkedList.length > 0) {
      return (
        (obj.name.toLowerCase().includes(inputText.toLowerCase()) ||
          obj.location === inputText) &&
        checkedList.includes(obj.location.split(',')[0])
      );
    } else {
      return (
        obj.name.toLowerCase().includes(inputText.toLowerCase()) ||
        obj.location === inputText
      );
    }
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div id="anaDiv">
              <Navbar
                inputText={inputText}
                setInputText={setInputText}
                count={count}
                setModalVisible={setModalVisible}
              />
              <div id="cont1">
                {modalVisible ? (
                  <Favorites
                    setModalVisible={setModalVisible}
                    setCount={setCount}
                  />
                ) : null}
                <div id="filterContainer">
                  <Filter checkedList={checkedList} setCheckedList={setCheckedList} />
                </div>
                <div id="cont2">
                  <HotelList data={result} setCount={setCount} />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/hotel/:id" element={<HotelDetail hotelData={hotels} />} />
      </Routes>
    </Router>
  );
}

export default HotelContainer;
