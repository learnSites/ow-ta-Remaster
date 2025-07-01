import React, { useState, useEffect, useRef } from "react";
import './popupProfile.css';
import fun from '../asset/fun.jpg';

export default function Popup() {
  let [isHover, setHover] = useState(false);
  let [click, setClick] = useState(false);
  let popupRdf = useRef(null);

  useEffect(() => {
    function handleOutClick(event) {
      if (popupRdf.current && !popupRdf.current.contains(event.target)) {
        setClick(false);
      }
    }

    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, []);

  return (
    <div
      ref={popupRdf}
      onClick={() => setClick(true)}
      style={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className='headProfile'>
        <img className='ProfilImg' src={fun} alt="Profile" />
      </div>

      {isHover && !click && (
        <div className="popDiv" style={{ fontSize: "16px" }}>
          <div>
            <p className="headContent">Personal Details</p>
            <p className="innerContent">Phone: 8122479301</p>
            <p className="innerContent">E-mail : arusamyarvnd12@gmail.com</p>
            <p style={{ fontSize: '14px', padding: '0px 0px 0px 10px', color: 'gray' }}>
              For More Details <u>Click the Profile</u>.
            </p>
          </div>
        </div>
      )}

      {click && (
        <div className="popDiv" style={{ fontSize: "16px" }}>
          <div>
            <p className="headContent">Personal Details</p>
            <p className="innerContent">Phone: 8122479301</p>
            <p className="innerContent">E-mail : arusamyarvnd12@gmail.com</p>
          </div>
          <div>
            <p className="headContent">Your Orders</p>
            <p className="innerContent">Home Appliances: 4</p>
            <div className="innerContent">
                <button className="contentButton">Orders</button>
            </div>
          </div>
          <div>
            <p className="headContent">Your Cart</p>
            <p className="innerContent">Home Appliances: 1</p>
            <p className="innerContent">Computer & Accessories: 2</p>
            <p className="innerContent">Smart Home Devices: 7</p>
            <p className="innerContent">Quantity : 3</p>
            <p className="innerContent">Total Price : 3000</p>
            <div className="innerContent">
                <button className="contentButton">Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
