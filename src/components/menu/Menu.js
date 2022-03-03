import React, { useState } from "react";
import "./Menu.css"
import Popup from "../popup/Popup";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Burger from "./Burger";
import styled from "styled-components";

const MenuContainer = styled.div`

    display: flex;
    font: normal normal bold 14px/18px Montserrat;
    letter-spacing: 0px;
    color: ${({location}) => location ? "#FFFFFF" : "#000000"};
    opacity: 1;
    z-index: 999;
    align-items: center;

    a {
        cursor: pointer;
    }


@media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 3.5rem;
    justify-content: space-evenly;
    flex-direction: column;
    gap: 50px;
    background-color: #161b40f9;
    background-position: right;
    background-size: 40%;
    position: fixed;
    transform: ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: transform 0.3s ease-in-out;

    a {
        border: none;
        cursor: pointer;
    }
  }
`;


const Menu = ({open, location}) => {
    let navigate = useNavigate();
    const [menuStyle, setMenuStyle] = useState("MenuContainer");
    const [popupClicked, setPopupClicked] = useState(false);




    return (
        <div >

            <nav >
  
                <MenuContainer open={open} location={location}>

                <a className="menu-dizajn" onClick={()=>{
                    navigate("/dizajneri");
                        }}>Dizajnéri</a>
                <a className="right-menu">Portfólio</a>

                <Popup className="popup"/>
                </MenuContainer>
                </nav>
            
        </div>

    )
}

export default Menu