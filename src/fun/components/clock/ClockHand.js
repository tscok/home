import React, { PropTypes } from 'react';
import purebem from 'purebem';
import moment from 'moment';

import './ClockHand.less';


const block = purebem.of('clock-hand');

const ClockHand = React.createClass({

    propTypes: {
        unit: PropTypes.oneOf([
            'hour',
            'minute',
            'second'
        ]).isRequired
    },

    isHour() {
        return this.props.unit === 'hour';
    },

    getAngle() {
        const steps = this.isHour() ? 360/12 : 360/60;
        const { token } = this.getToken();
        const angle = this.getTime(token) * steps;

        if (this.isHour()) {
            const decimal = this.getTime(token) / 60;
            return angle + (decimal * steps);
        }

        return angle;
    },

    getColor(angle = 0) {
        return `hsla(${angle}, 80%, 60%, .75)`;
    },

    getTime(token = 's') {
        return moment().format(token);
    },

    getToken() {
        switch (this.props.unit) {
            case 'hour':
                return { token: 'h', displayToken: 'HH' };
                break;
            case 'minute':
                return { token: 'm', displayToken: 'mm' };
                break;
            case 'second':
                return { token: 's', displayToken: 'ss' };
        }
    },

    render() {
        const { unit } = this.props;
        const angle = this.getAngle();
        const style = {
            transform: `rotate(${angle}deg)`
        };

        return (
            <div className={ block({ unit }) } style={ style }></div>
        );
    }

});

export default ClockHand;
