import React from 'react'
import { Item } from './Item'

export const ItemList = ({productos = []}) => {
    return (
        <>
         
            <h2 className="text-center mt-5">NUESTROS PRODUCTOS</h2>
            
              <div className="row"> 
                    
                    {productos.map((item) => 
                    <Item {...item} key={item.id}/>
                    )}
                
                </div>
            
            
        </>
    )
}
