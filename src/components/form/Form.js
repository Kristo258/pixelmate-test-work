import React, {useState, useEffect}from "react"
import "./Form.css"

const Form = ()=>{

    const initialValues = {email: "", heslo: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [handleErrors, setHandleErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [suhlas, setSuhlas] = useState(false)

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    const check = (e)=>{
        setSuhlas(e.target.checked);
        console.log(suhlas);
    }

    const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!values.email){
            errors.email = "Pole na Email je povinné."
        } else if (!regex.test(formValues.email)){
            errors.email = "Neplatný email";
        }
        if (!values.heslo){
            errors.heslo = "Vyplň heslo."
        }
        if (!suhlas){
            errors.suhlas = "Potvrďte súhlas so spracovaním údajov."
        } return errors;
        
    }

    useEffect(()=>{
        
        if (Object.keys(handleErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [handleErrors])


    const handleSubmit = (e)=>{
        e.preventDefault();
        setHandleErrors(validate(formValues))
        setIsSubmit(true);
        
    }

    return(<div className="formContainer">
        <div className="nadpis">Prihláste sa</div>
        <form onSubmit={handleSubmit}>
            <div><input type="text" name="email" id="email" placeholder="Váš email" onChange={handleInputChange} /></div>
            <p className="email-error">{handleErrors.email}</p>
            <div><input type="password" name="heslo" id="heslo" placeholder="Heslo" onChange={handleInputChange} /></div>
            <p className="pass-error">{handleErrors.heslo}</p>
            <div className="suhlas-ramcek"><input type="checkbox" name="" className="suhlasChck" onChange={check}/>
            
            <label htmlFor="" className="suhlas">Souhlasím se všeobecnými podmínkami a Zásadou o ochranně osobních údajů.</label></div>
            <p className="suhlas-error">{handleErrors.suhlas}</p>
            <button type="submit" id="submitBtn" >Prihlásiť sa</button>
        </form>
            </div>
    )
}

export default Form