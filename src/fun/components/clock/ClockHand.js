import React, { PropTypes } from 'react';
import purebem from 'purebem';

import {
    getAngle,
    getColor,
    getTime
} from './utils';


const block = purebem.of('clock');

const ClockHand = React.createClass({

    contextTypes: {
        colorful: PropTypes.bool
    },

    propTypes: {
        unit: PropTypes.oneOf([
            'hour',
            'minute',
            'second'
        ]).isRequired
    },

    getStyle() {
        const angle = getAngle(this.props.unit);
        const color = getColor(angle);
        const style = { transform: `rotate(${angle}deg)` };

        if (this.context.colorful) {
            style.backgroundColor = color;
        }

        return style;
    },

    getValue() {
        const time = getTime(this.props.unit);
        return time < 10 ? `0${time}` : time;
    },

    render() {
        const { unit } = this.props;
        return (
            <div className={ block('hand-container', { unit }) } style={ this.getStyle() }>
                <div className={ block('hand', { unit }) }></div>
                <div className={ block('value') }>
                    { this.getValue() }
                </div>
            </div>
        );
    }

});

export default ClockHand;
