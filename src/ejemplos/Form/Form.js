import React, { useState } from 'react'

export const Form = () => {

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
    })


    const handleInputChange = (e) =>{
        setValues({
           ...values,
           [e.target.name] : e.target.value
        })
    }

    const handleSubmit = ( e ) =>{
        e.preventDefault()
        console.log(values)
    }
    
    return (
        <div className="container">
        <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control m-2"
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleInputChange}
                >
                    
                </input>
                <input className="form-control m-2"
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={values.apellido}
                onChange={handleInputChange}
                >

                </input>
                <input className="form-control m-2"
                type="text"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleInputChange}>
            </input>

                <button className="btn btn-success" type="submit">Enviar</button>
            </form>
    </div>
    )
}
