import React from 'react';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
const service = createCheckoutService();

class Checkout extends React.Component {
    render(){
        embedCheckout({
            "url": "https:\/\/tatiana.fun\/cart.php?embedded=1&action=loadInCheckout&id=f56286f9-5bfe-4263-852b-c2099eecc879&token=9d916d6d5e7082c0d82fd591cc964c84859f71c99f32b168ab799beea7adba1a",
            "containerId": "app"
        })
    return(embedCheckout)
    } 
}

// Tested with code below and routes are working properly. 
// class Checkout extends React.Component{
//     render(){
//         return <h1>Checkout</h1>
//     }
// }
    
export default Checkout