import { useState } from "react";

const Form = () => {

    const [userData, setUserData] = useState({
        name: "",
        lastName: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData);
    }

    const handleChange= (e) => {
        setUserData({...userData , [e.target.name]: e.target.value});
    }

   



  return (
    <div>
    <h2>Formulario</h2>

    <form onSubmit={handleSubmit}>

    <input type="text" placeholder="Ingrese su nombre" name="name" onChange={handleChange}/>
    <input type="text" placeholder="Ingrese su apellido" name="lastName" onChange={handleChange}/>
    <button type="submit">Enviar</button>

    </form>


    </div>
  )
}

export default Form