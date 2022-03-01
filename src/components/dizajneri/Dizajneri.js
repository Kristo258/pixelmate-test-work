import React, { useEffect, useState } from "react";
import KartaMinimal from "../karta-minimal/KartaMinimal";
import "./Dizajneri.css"

const Dizajneri = ()=>{
    const [chlapi, setChlapi] = useState([]);
    const [input, setInput] = useState("");
    const [temp, setTemp] = useState();

    useEffect(()=>{
        getData();
    },[input===""])

    const getData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); 
        const data = await response.json();
        setChlapi(data);
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
            <div className="search">
                <input type="text" placeholder="Vyhledávání" onChange={handleInputChange} value={input}/>
                <button className="x-button" onClick={()=>{setInput("")}}>X</button><button className="hladat-btn" onClick={searchButtonClick}>VYHLEDAT</button>
            </div>
            <div className="container-dizajn">

            
           {chlapi.map(dizajner => (
               <KartaMinimal key={dizajner.id}
               nick={dizajner.username} 
               meno={dizajner.name} 
               email={dizajner.email} 
               mesto={dizajner.address.city} 
               ulica={dizajner.address.street} 
               zip={dizajner.address.zipcode}
               website={dizajner.website}/>
           ))}
        </div>
            
            </div>
            
    )
}

export default Dizajneri