import Profile from "./components/PopupProfile";
import Popup from "./components/popup";
import { useState, useEffect, useRef } from "react";
import Card from "./components/Card";
import "./app.css";
import Footer from './components/footer';
import Banner from './components/banner';

function App() {
  const product = [
    { Pdtname: "Home Appliances", logo: "/asset/Home Appliances.jpg" },
    { Pdtname: "Computers & Accessories", logo: "/asset/computer.jpg" },
    { Pdtname: "Mens Collection", logo: "/asset/mens.jpg" },
    { Pdtname: "Kids Collection", logo: "/asset/kids.jpg" },
    { Pdtname: "Women Collection", logo: "/asset/women.jpg" },
    { Pdtname: "Smart Home Devices", logo: "/asset/smarthome.webp" },
    { Pdtname: "Entertainment Electronics", logo: "/asset/game.jpg" },
    { Pdtname: " Mobile & Tablets", logo: "/asset/mobtab.jpg" },
    { Pdtname: "Networking & Connectivity", logo: "/asset/network.jpg" },
  ];
  let [open, setOpen] = useState("popClose");
  let pop = useRef(null);

  useEffect(() => {
    function handleOpen(event) {
      if (pop.current && !pop.current.contains(event.target)) {
        let popupDiv = document.querySelector('.popupDiv');
        if(!popupDiv.contains(event.target)){
          setOpen("popClose");
        }
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
            (open == "popOpen") ? setOpen("popClose") :setOpen("popOpen");
          }}
            className="headMenu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="searchDiv">
          <div className="inputFields" >
            <input className="headerInput" type="text" placeholder="Search With OT-WA" />
            <img className="headerLogo" src="/asset/ow-ta_Logo.png" alt="finding Logo" />
          </div>
        </div>
        <Profile />
      </div>
      <div className="bodyContent">
        <div className="popupDiv" >
          <Popup action={open} />
        </div>
        <div className="contentDiv">
          <Banner />
          {product.map((element, index) => (
            <Card key={index} src={element.logo} name={element.Pdtname} />
          ))}
        </div>
      </div>
      <div className="footer">
          <Footer />
      </div>
    </>
  );
}

export default App;
