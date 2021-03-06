import React, { useEffect, useState } from "react"
import "./Popup.css"
import { useLocation } from "react-router-dom";
import {useTransition, animated} from "react-spring"

const Popup = ()=>{
    let location = useLocation();
    const [showPopup, setShowPopup] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [error, setError] = useState("");
    const [menuStyle, setMenuStyle] = useState("prihlasenie");
    const transition = useTransition(showPopup, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0},

    });



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

    useEffect(()=>
    { 
    
        if(location.pathname === '/dizajneri' || location.pathname === '/profil'){
            setMenuStyle("prihlasenie-black") 
        } else {
            setMenuStyle("prihlasenie")
        }
    },[location])

    return (
        <div >
            <a className={menuStyle} onClick={togglePopup}>Prihlásiť sa</a>

            {transition((style, item)=>
                item && <animated.div style={style} className="popup">
                
                <div className="overlay" onClick={togglePopup}></div>
                <div className="popup-content">
                    <div className="btn-close" onClick={togglePopup}></div>
                    <div className="nadpis-popup">Prihlásiť sa</div>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <input type="email" name="email" className="email" placeholder="Váš email" value={emailValue} onChange={handleChangeValue}/>
                    <p className="error-popup">{error}</p>
                    <button className="btn-odoslat" onClick={sendDataToConsole}>Odoslať</button>
                </div>
            </animated.div>  )}
            

        </div>
    )
}

export default Popup