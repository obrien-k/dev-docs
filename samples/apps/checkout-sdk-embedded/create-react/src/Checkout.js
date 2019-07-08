import React from "react";
import { createCheckoutService } from "@bigcommerce/checkout-sdk";
import { embedCheckout } from "@bigcommerce/checkout-sdk";
const service = createCheckoutService();

class Checkout extends React.Component {
  render() {
    embedCheckout({
      url: "{replace with the embedded checkout URL}",
      containerId: "root"
    });
    return embedCheckout;
  }
}

// Tested with code below and routes are working properly.
// class Checkout extends React.Component{
//     render(){
//         return <h1>Checkout</h1>
//     }
// }

export default Checkout;
