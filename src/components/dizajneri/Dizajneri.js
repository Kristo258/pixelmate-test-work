import React, { useEffect, useState } from "react";
import KartaMinimal from "../karta-minimal/KartaMinimal";
import "./Dizajneri.css"
import { useNavigate } from "react-router-dom";

const Dizajneri = ()=>{ 
    const [chlapi, setChlapi] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(true);
    let navigate = useNavigate();

    useEffect(()=>{
        getData();
    },[input===""])

    const getData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const data = await response.json();
        setChlapi(data);
        setLoading(false);
    }

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }

    const searchButtonClick = ()=>{
        
        setChlapi(chlapi.filter(y => y.name.toLowerCase().includes(input)))
        console.log(chlapi);
        
    }

    
    
    return (
        <div>
            <div className="logo-top-black" onClick={()=>{navigate("/")}}></div>
            <div className="search">
                <input type="text" placeholder="Vyhledávání" onChange={handleInputChange} value={input}/>
                <button className="x-button" onClick={()=>{setInput("")}}>X</button><button className="hladat-btn" onClick={searchButtonClick}>VYHLEDAT</button>
            </div>
            {loading ? <div class="loadingio-spinner-rolling-s9k1qnjmbq"><div class="ldio-3dscfi9z2gp">
                <div></div>
                </div></div> : <div className="container-dizajn">
            

            
            {chlapi.map(dizajner => (
                <KartaMinimal key={dizajner.id}
                nick={dizajner.username} 
                meno={dizajner.name} 
                email={dizajner.email} 
                mesto={dizajner.address.city} 
                ulica={dizajner.address.street} 
                zip={dizajner.address.zipcode}
                stranka={dizajner.website}
                popis={dizajner.company.catchPhrase}
                company={dizajner.company.name}/>
            ))}
         </div>}
            
            
            
            </div>
            
    )
}

export default Dizajneri