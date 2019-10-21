import React from 'react';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';
import './Cart.css';

class Cart extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary selected={this.props.selected} />
                <Total selected={this.props.selected} />
            </section>
        )
    }
}

export default Cart;