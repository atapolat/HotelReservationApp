import React from 'react';
import { MdOutlineFavorite } from 'react-icons/md';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../Redux/Actions/Actions';
import { toast } from 'react-toastify';
import './Hotels.css';


function HotelCard({ info, setCount }) {
    const dispatch = useDispatch();

    const title = info.name;

    const addToFavoritesHandler = (value) => {
        dispatch(addToFavorites(value));

        toast.warn("Added to Favorites!", {
            icon: (
                <MdOutlineFavorite style={{ color: "#2e83d8", fontSize: "20px", fontWeight: "bolder" }} />
            ),
            position: "bottom-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined, 
        });
    };

    return (
        <>
            <div className="card-container ">
                
                    <img
                        src={info.image}
                        className="img"
                        alt=""
                    />
                    
                        <h2 className="card-title">{title}</h2>
                        <hr className="divider" />
                        <h6 className="card-title text-end1">{info.location}</h6>
                        <h6 className="card-title text-end2">{info.price.toFixed(2)}TL / Night</h6>

                        <button
                            className="align-self-center align-self-sm-center button mt-2"
                            onClick={() => addToFavoritesHandler(info)}
                        >
                            <IconContext.Provider
                                value={{ color: "#2e83d8", className: "global-class-name" }}
                            >
                                <MdOutlineFavorite /> Add to Favorites
                            </IconContext.Provider>
                        </button>

                        <Link to={`/hotel/${info.id}`}>
                            <button className="seeDetails">See Details...</button>
                        </Link>
                    
                
            </div>
        </>
    );
}

export default HotelCard;
