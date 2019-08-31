import React from 'react';
import propTypes from 'prop-types';

export default class extends React.Component {

    static propTypes = {};

    state = {
        number: 1,
    };

    render() {
        return (
            <>
                <h1>
                    hey boah
                </h1>
                <div style={{display: 'flex'}}>
                    <button
                        onClick={() => {
                            this.setState({number: this.state.number - 1})
                        }}
                    >-</button>
                    <span>{this.state.number}</span>
                    <button
                        onClick={() => {
                            this.setState({number: this.state.number + 1})
                        }}
                    >+</button>
                </div>
            </>
        )
    }
}