import React, { useState } from "react";
import "./Menu.css"
import Popup from "../popup/Popup";

const Menu = () => {
    const [popupClicked, setPopupClicked] = useState(false);

    const togglePopup = ()=>{
        setPopupClicked(!popupClicked);
    }

    return (
        <div className="menu-container">
            <a href="">Dizajnéri</a>
            <a href="" className="right">Portfólio</a>
            
            <Popup className="popup"/>
        </div>

    )
}

export default Menu