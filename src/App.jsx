import Profile from "./components/PopupProfile";
import Popup from "./components/popup";
import { useState, useEffect, useRef } from "react";
import Card from "./components/Card";
import "./app.css";

function App() {
  const product = [
    { Pdtname: "Home Appliances", logo: "/src/asset/Home Appliances.jpg" },
    { Pdtname: "Computers & Accessories", logo: "/src/asset/computer.jpg" },
    { Pdtname: "Mens Collection", logo: "/src/asset/mens.jpg" },
    { Pdtname: "Kids Collection", logo: "/src/asset/kids.jpg" },
    { Pdtname: "Women Collection", logo: "/src/asset/women.jpg" },
    { Pdtname: "Smart Home Devices", logo: "/src/asset/smarthome.webp" },
    { Pdtname: "Entertainment Electronics", logo: "/src/asset/game.jpg" },
    { Pdtname: " Mobile & Tablets", logo: "/src/asset/mobtab.jpg" },
    { Pdtname: "Networking & Connectivity", logo: "/src/asset/network.jpg" },
  ];
  let [open, setOpen] = useState("popClose");
  let pop = useRef(null);

  useEffect(() => {
    function handleOpen(event) {
      if (pop.current && !pop.current.contains(event.target)) {
        setOpen("popClose");
      }
    }

    document.addEventListener("mousedown", handleOpen);
    return () => {
      document.removeEventListener("mousedown", handleOpen);
    };
  }, []);
  return (
    <>
      <div className="header">
        <div className="menuDiv">
          <div
            ref={pop}
          onClick={() => {
            setOpen("popOpen");
          }}
            className="headMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="searchDiv">
          <input className="inputFields" type="text" placeholder="Search" />
        </div>
        <Profile />
      </div>
      <div className="bodyContent">
        <div>
          <Popup action={open} />
        </div>
        <div className="contentDiv">
          {product.map((element, index) => (
            <Card key={index} src={element.logo} name={element.Pdtname} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
