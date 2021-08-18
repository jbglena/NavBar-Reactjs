import React from 'react'
import { Icon } from 'semantic-ui-react'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <a href><Icon disabled name='shopping cart' /></a>
        </div>
    )
}

export default CartWidget
