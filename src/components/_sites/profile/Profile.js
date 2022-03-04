import React, { useEffect } from 'react';
import "./Profile.css"
import { useLocation, useNavigate, useParams} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState } from 'react';

const Profile = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    let {id} = useParams();
    const [dizajner, setDizajner] = useState(null);

    useEffect(()=>{
        
        fetchData();
        
    },[])

    const fetchData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        const {user} = data;
        setDizajner(user);
    };
    console.log(dizajner);

    return (
        <div> 
            <div className="logo-top-black" onClick={()=>{navigate("/")}}></div>
    <div className='container-flex'>
        {dizajner && <div className="karta-container-2">
        <button className='button-profil' onClick={()=>{navigate("/dizajneri")}}>Zpět</button>
        <div className="nick">{String(dizajner.email.toLowerCase()).split("@")[0]}</div>
        <div className="meno-priezvisko">{dizajner.name}</div>
        <div className="emailova-adresa-profil">{dizajner.email}</div>
        <div className="adresa-profil">
            <img src={require("./Group 3358.png")} alt="x" />
            <div className="adresa-vpravo">
            <div className="mesto">{dizajner.address.city}</div>
            <div className="ulica">{dizajner.adress.street}</div>
            <div className="zip">{dizajner.address.zipcode}</div>
            </div>
        </div>
        <div className="stranka">{dizajner.website}</div>
        <div className='veta'><div className='firma'>{dizajner.company.name}</div> {dizajner.company.catchPhrase}</div>
        </div>}
        <div className='obrazok-dizajner'></div>
    </div>
            
            

        </div>
    );
};

export default Profile;