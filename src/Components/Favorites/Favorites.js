import React from "react";
import FavoriteItems from "./FavoriteItems";
import { IoMdCloseCircleOutline } from "react-icons/io";

function Favorites({ setModalVisible, setCount }) {
  return (
    <div className="modal show fade modal-container" style={{ display: "inline-block", backgroundColor: "rgba(0,0,0,0.8)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Favorites</h5>
            <button type="button" className="btn-close" style={{ position: "absolute", right: 15, top: 15 }} onClick={() => setModalVisible(false)}>
            <IoMdCloseCircleOutline  color="#2e83d8"/>
            </button>
          </div>
          <div className="modal-body">
            <FavoriteItems setCount={setCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorites;