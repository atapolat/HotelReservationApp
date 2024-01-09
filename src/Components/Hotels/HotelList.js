import React from 'react';
import HotelCard from './HotelCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Hotels.css';

function HotelList({ data, setCount }) {
	return (
		<>
			 <ToastContainer />
            <div className="row">
                {data && data.length > 0 ? (
                    data.map((value, index) => (
                        <div className="col-12 " key={index}>
                            <HotelCard info={value} setCount={setCount} />
                        </div>
                    ))
                ) : (
                    <p>Hotel not found !</p>
                )}
            </div>
		</>
	);
}

export default HotelList;