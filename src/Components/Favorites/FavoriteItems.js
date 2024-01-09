import React from "react";
import { FaTrash } from "react-icons/fa";
import './Favorites.css';
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites } from '../../Redux/Actions/Actions';


function FavoriteItems() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites);

  const deleteItem = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <>
      {favoriteItems.length > 0 ? (
        <>
          <table className="table">
            <tbody>
              {favoriteItems.map((item, index) => (
                <tr key={index}>
                  <th>{item.name}</th>
                  <td>
                    <button
                      className={"delete-button"}
                      onClick={() => deleteItem(item.id)}
                    >
                      <FaTrash style={{ color: "#2e83d8" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>There are no hotels in your favorites.</p>
      )}
    </>
  );
}

export default FavoriteItems;
