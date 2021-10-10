import React, { useEffect, useState } from 'react'
import { pedirProductos } from '../../helpers/pedirProductos'
import './ItemListContainer.css'
import { ItemList } from './ItemList'
import { useParams } from 'react-router'









export const ItemListContainer = ({greeting}) => {
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    
    const {categoryId} = useParams()

    //console.log(categoryId)
    
    
    useEffect(() =>{
           
    

        (pedirProductos())
            .then((res) => {
                if(categoryId){
                    setItems(res.filter(prod => prod.category === categoryId))
                }else{
                    setItems(res)
                }
                
                })
            .catch((err) => console.log(err))
            .finally(() =>{
                setLoading(false)
            })

    }, [])



    return (
        <>
         <h1 className="greeting">{greeting}</h1>
            
        
            { loading ? <h2>Cargando...</h2>
             : <ItemList productos={items}/>
            }
            
            
            
        </>
    )
}
