import React from 'react';
import "./Profile.css"
import { useLocation, useNavigate } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const Profile = () => {

    const { state } = useLocation();
    const navigate = useNavigate();

    return (
        <div>
            <div className="logo-top-black" onClick={()=>{navigate("/")}}></div>
            <div className='container-flex'>
            <div className="karta-container-2">
            <button className='button-profil' onClick={()=>{navigate("/dizajneri")}}>Zpět</button>
            <div className="nick">{String(state.email.toLowerCase()).split("@")[0]}</div>
            <div className="meno-priezvisko">{state.meno}</div>
            <div className="emailova-adresa-profil">{state.email}</div>
            <div className="adresa-profil">
                <img src={require("./Group 3358.png")} alt="x" />
                <div className="adresa-vpravo">
                <div className="mesto">{state.mesto}</div>
                <div className="ulica">{state.ulica}</div>
                <div className="zip">{state.zip}</div>
                </div>
            </div>
            <div className="stranka">{state.stranka}</div>
            <div className='veta'><div className='firma'>{state.firma}</div> {state.popis}</div>
            </div>
            <div className='obrazok-dizajner'></div>
        </div>

        </div>
    );
};

export default Profile;