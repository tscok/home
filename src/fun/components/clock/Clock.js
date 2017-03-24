import React from 'react';
import purebem from 'purebem';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

import './Clock.less';


const block = purebem.of('clock');

const Clock = React.createClass({

    getInitialState() {
        return {
            count: 0
        };
    },

    componentDidMount() {
        this.initCounter();
    },

    componentWillUnmount() {
        clearInterval(this.counter);
    },

    initCounter() {
        this.counter = setInterval(() => {
            const count = this.state.count + 1;
            this.setState({ count });
        }, 500);
    },

    render() {
        return (
            <div className={ block() }>
                <ClockFace />
                <ClockHand unit="hour" />
                <ClockHand unit="minute" />
                <ClockHand unit="second" />
            </div>
        );
    }

});

export default Clock;
