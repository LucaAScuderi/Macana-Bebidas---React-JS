import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import './ItemListContainer.css'
import { ItemList } from './ItemList'






export const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    

    
    
    useEffect(() =>{
        
        (pedirProductos())
            .then((res) => setItems(res))
            .catch((err) => console.log(err))
            .finally(() =>{
                setLoading(false)
            })

    }, [])



    return (
        <div>
         <h1 className="greeting">{greeting}</h1>
            <hr />
        
            { loading ? <h2>Cargando...</h2>
             : <ItemList productos={items}/>
            }
            
            
            
        </div>
    )
}
