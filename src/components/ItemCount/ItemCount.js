import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ItemCount.css'

const  ItemCount = ({initial=0, stock, onAdd}) => {
const [ stockItems, setStockItems] = useState(0)

const handleIncrement = () =>{
    setStockItems(stockItems+1)
}

const handleDecrement = () =>{
    if (stockItems > 0 ) {
    setStockItems(stockItems-1)
} else {
    return false
}
}

return(
    <div className='ItemCount'>
        <p>Cantidad:{stockItems}</p>
        <Button primary onClick={handleDecrement}>-</Button>
        <Button primary onClick={handleIncrement}>+</Button>
        <Button icon onClick={onAdd}>
            <Icon disabled name='shop' />
        </Button>
    </div>
)
}

//function App(){
//    let stock = 30;

 //   function Add(stockItems){
   //     stockItems > stock
     //   ? alert ('Sin stock')
       // : alert ('Añadido')
    //}
//}

export default ItemCount