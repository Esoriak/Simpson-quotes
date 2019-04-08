import React, {Component} from 'react';

class Lamp extends Component {
    render() {
        const light = this.props.on ? 'on' : 'off' ;
        return (
            <div className="Lamp">
            <button className={light}>{light.toUpperCase()}</button>
            <figure className={light}/>
            </div>
        )
    }
}

export default Lamp