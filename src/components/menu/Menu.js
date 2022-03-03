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
    align-items: baseline;
    font-size: 2rem;
    padding-top: 3.5rem;
    justify-content: flex-start;
    flex-direction: column;
    gap: 50px;
    background-color: #161b40f9;
    position: fixed;
    left: ${({open}) => open ? "50vw" : "100vw"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s ease-in-out;
    justify-items: left;
    color: #ffffff;


    a {
        border: none;
        cursor: pointer;
    }

    .overlay-left-burger {
        position: fixed;
        top: 0;
        left: 0;
        width: 50vw;
        height: 100vh;
        background-color: azure;
        opacity: ${({open}) => open ? "0.5" : "0"};
        visibility: ${({open}) => open ? "visible" : "hidden"};
        transition: opacity 0.3s ease-in-out;
    
    }
  }
`;


const Menu = ( {open, location, closeMenu}) => {
    let navigate = useNavigate();

    return (
        <div >

            <nav >
                <MenuContainer open={open} location={location}>

                <a className="menu-dizajn" onClick={()=>{
                    navigate("/dizajneri");
                    closeMenu(()=>{
                        if (open) {
                            return false
                        } else if (open === false){
                            return false
                        }
                    });
                        }}>Dizajnéri</a>
                <a className="right-menu">Portfólio</a>

                <Popup className="popup"/>
                <div className="overlay-left-burger" onClick={()=>{closeMenu(()=>{
                        if (open) {
                            return false
                        } else if (open === false){
                            return false
                        }
                    });}}></div>
                </MenuContainer>
                </nav>
            
        </div>

    )
}

export default Menu