import React, { useEffect, useState } from "react"
import "./Popup.css"

const Popup = (props)=>{

    console.log(props.clicked);
    const [showPopup, setShowPopup] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [error, setError] = useState("");


    const togglePopup = ()=>{
        setShowPopup(!showPopup);
        console.log(showPopup);
        setError("");
    }

    const handleChangeValue = (e)=>{
        setEmailValue(e.target.value)
    }

    const sendDataToConsole = ()=>{
        if (emailValue.length > 0) {
        console.log(emailValue);
        setEmailValue("");
        togglePopup();
        } else {
            setError("Najprv vyplň email");
        }
    }

    return (
        <div >
            <a className="prihlasenie" onClick={togglePopup}>Prihlásiť sa</a>

            {showPopup && <div className="popup">
                
                <div className="overlay" onClick={togglePopup}></div>
                <div className="popup-content">
                    <div className="btn-close" onClick={togglePopup}></div>
                    <div className="nadpis-popup">Prihlásiť sa</div>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <input type="email" name="email" className="email" placeholder="Váš email" value={emailValue} onChange={handleChangeValue}/>
                    <p className="error">{error}</p>
                    <button className="btn-odoslat" onClick={sendDataToConsole}>Odoslať</button>
                </div>
            </div>}
            

        </div>
    )
}

export default Popup