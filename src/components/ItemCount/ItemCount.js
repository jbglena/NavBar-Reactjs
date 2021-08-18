import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './ItemCount.css'

const  ItemCount = ({initial=0, onAdd}) => {
const [ stockItems=11, setStockItems] = useState(0)

const handleIncrement = () =>{
    if (stockItems <=11){
    setStockItems(stockItems+1)
} else {
    return alert('Sin Stock')
}
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

export default ItemCount
