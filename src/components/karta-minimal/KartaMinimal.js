import React from "react";
import "./KartaMinimal.css"
import { useNavigate, useParams } from "react-router-dom";
import Profile from "../_sites/profile/Profile";

const KartaMinimal = ({key, meno, email, mesto, ulica, zip, stranka, popis, company, dizajner})=>{

    const navigate = useNavigate();
    let {id} = useParams();
    console.log(dizajner);

    return (
        <div className="karta-container">
            <div className="nick">{String(email.toLowerCase()).split("@")[0]}</div>
            <div className="meno-priezvisko">{meno}</div>
            <div className="emailova-adresa">{email.toLowerCase()}</div>
            <div className="adresa">
                <img src={require("./Group 3358.png")} alt="x" />
                <div className="adresa-vpravo">
                <div className="mesto">{mesto}</div>
                <div className="ulica">{ulica}</div>
                <div className="zip">{zip}</div>
                </div>
            </div>
            <div className="stranka">www.{stranka}</div>
            <button className="button-minimal" onClick={()=>{ 
                navigate(`/dizajneri/${dizajner.id}`, {state:{meno:meno, email:email, mesto:mesto, ulica:ulica, zip:zip, stranka:stranka, id:key, popis:popis, firma:company, dizajner:dizajner}});
                console.log(dizajner);
                }}>ZOBRAZIT PROFIL →</button>
        </div>
    )
}

export default KartaMinimal