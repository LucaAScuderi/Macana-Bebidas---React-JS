import React from 'react'



export const HomeView = ({titulo, contenido}) => {

    //console.log(props.titulo)

    //const {titulo, contenido} = props

    return (
        
        <section>
            <h1>{titulo}</h1>
            <hr/>
            <p>{contenido}</p>
        </section>
        
    )
}


