import React, { Component } from 'react';
class Counter extends Component {
   
    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
    formatBadge = () => {
        let classes = "badge badge-";
        return classes += (this.props.counter.value === 0) ? 'warning' : 'primary'; 
    }

    formatDecrement = () => {
        return this.props.counter.value === 0 ? true : false;
    }

    render() {
        const {counter, onIncrement, onDecrement, onDelete} = this.props;
        return (
            <React-Fragment>
                <span className={this.formatBadge()}>{this.formatCount()}</span>
                <button 
                className="btn btn-success m-2"
                onClick={ () => onIncrement(counter) }
                >+</button>
                <button 
                className="btn btn-info"
                onClick={ () => onDecrement(counter) }
                disabled={this.formatDecrement()}
                >-</button>
                <button 
                className="btn btn-danger m-2"
                onClick={() => onDelete(counter.id)}
                >Delete</button>
            </React-Fragment>
        );
    }
}

export default Counter;