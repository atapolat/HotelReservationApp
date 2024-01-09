import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel, MdOutlineFavorite } from "react-icons/md";
import { IconContext } from "react-icons";
import './Navbar.css';

function Navbar({ inputText, setInputText, count, setModalVisible }) {
  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const resetInput = () => {
    setInputText("");
  };

  return (
    <>
      <nav className="navbar sticky-top nav-container">

        <div>
            <div className="container-fluid d-flex ">

          <div className="ms-3">
            <form className="search-container">
              <IconContext.Provider value={{ color: "#2e83d8", className: "icon" }}>
                <FaSearch />
              </IconContext.Provider>
              <input
                className="search-input"
                placeholder="Search..."
                value={inputText}
                onChange={handleChange}
              />
              {inputText.length > 0 ? (
                <button className="erase-button" onClick={() => resetInput()}>
                  <MdOutlineCancel />
                </button>
              ) : null}
            </form>
          </div>

          <div className="d-flex flex-column align-items-center">
            <h1 style={{ color: "#2e83d8" }}>Pinsoft Hotels</h1>
          </div>

          <div className="me-3">
            <button className="favorites" onClick={() => setModalVisible(true)}>
              Favorites 
              <MdOutlineFavorite />
            
            </button>
          </div>
        </div>
        </div>

      </nav>
    </>
  );
}

export default Navbar;