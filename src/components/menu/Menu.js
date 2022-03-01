import React, { useState } from "react";
import "./Menu.css"
import Popup from "../popup/Popup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Menu = () => {
    let location = useLocation();
    let navigate = useNavigate();
    const [menuStyle, setMenuStyle] = useState("menu-container");
    const [popupClicked, setPopupClicked] = useState(false);


    const togglePopup = ()=>{
        setPopupClicked(!popupClicked);
    }

    useEffect(()=>
    { 
    
        if(location.pathname == '/dizajneri' || location.pathname == '/profil'){
            setMenuStyle("menu-container-black") 
        } else {
            setMenuStyle("menu-container")
        }
    },[location])

    return (
        <div className={menuStyle}>
            <a onClick={()=>{

                 navigate("/dizajneri");
            }}>Dizajnéri</a>
            <a className="right-menu">Portfólio</a>
            
            <Popup className="popup"/>
        </div>

    )
}

export default Menu