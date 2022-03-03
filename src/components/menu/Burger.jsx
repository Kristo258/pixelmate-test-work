import React, { useEffect } from 'react';
import styled from "styled-components";
import { useState } from 'react';
import RightNav from './RightNav';
import Menu from './Menu';
import { useLocation } from 'react-router-dom';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    
    cursor: pointer;
    z-index: 200000;
    display: none;

    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? "#ccc" : "#333"};
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            transform: ${ ({open}) => open ? "rotate(45deg)" : "rotate(0)" };
        }

        &:nth-child(2) {
            transform: ${ ({open}) => open ? "translateX(100%)" : "translateX(0)" };
            opacity: ${({open}) => open ? 0 : 1}
        }

        &:nth-child(3) {
            transform: ${ ({open}) => open ? "rotate(-45deg)" : "rotate(0)" };
        }

    }
`;

function Burger() {
    const [open, setOpen] = useState(false);
    const [actualLocation, setActualLocation] = useState(false)

    let location = useLocation();

    useEffect(()=>{
        if (location.pathname === "/dizajneri" || location.pathname === "/profil") {
            setActualLocation(false);
        } else if (location.pathname === "/"){
            setActualLocation(true)
        };
    },[location])

    if (open) {
        document.body.style.overflow = "hidden"
    } else {document.body.style.overflow = "scroll"};


    return (
        <>
        <StyledBurger open={open}  onClick={()=>setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>

        <Menu open={open} location={actualLocation}/>
        </>

    );
}

export default Burger;