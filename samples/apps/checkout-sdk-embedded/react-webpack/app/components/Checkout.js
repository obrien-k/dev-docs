import React from 'react';
import { createCheckoutService } from '@bigcommerce/checkout-sdk';
import { embedCheckout } from '@bigcommerce/checkout-sdk';
const service = createCheckoutService();

class Checkout extends React.Component {
    render(){
        embedCheckout({
            "url": "https:\/\/tatiana.fun\/cart.php?embedded=1&action=loadInCheckout&id=4fef3ff1-d1e9-4a6b-8d42-a06b28e5ca43&token=53ede01b68637f6fa08b36c39185e220bfe6c8545a29a36b6cba9840817b7729",
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