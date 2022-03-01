import React from "react";
import "./KartaMinimal.css"

const KartaMinimal = ({nick, meno, email, mesto, ulica, zip, stranka})=>{
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
            <div className="stranka">{stranka}</div>
            <button>ZOBRAZIT PROFIL →</button>
        </div>
    )
}

export default KartaMinimal