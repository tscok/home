import React, { PropTypes } from 'react';
import purebem from 'purebem';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

import './Clock.less';


const block = purebem.of('clock');

const Clock = React.createClass({

    propTypes: {
        colorful: PropTypes.bool
    },

    getDefaultProps() {
        return {
            colorful: false
        };
    },

    childContextTypes: {
        colorful: PropTypes.bool
    },

    getChildContext() {
        return {
            colorful: this.props.colorful
        };
    },

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
        const { colorful } = this.props;

        if (this.props.children) {
            return (
                <div>{ this.props.children }</div>
            );
        }

        return (
            <div className={ block({ colorful }) }>
                <ClockFace />
                <ClockHand unit="second" />
                <ClockHand unit="minute" />
                <ClockHand unit="hour" />
            </div>
        );
    }

});

export default Clock;
