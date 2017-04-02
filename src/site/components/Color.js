import React, { PropTypes } from 'react';
import purebem from 'purebem';

import {
    getAngle,
    getColor,
    getTime
} from 'fun/components/clock/utils';

import { ClockFace } from 'fun/components';

import './Color.less';


const block = purebem.of('color');

const Color = React.createClass({

    propTypes: {
        unit: PropTypes.string.isRequired
    },

    renderClock() {
        const { unit } = this.props;
        const angle = getAngle(unit)
        const style = { transform: `rotate(${angle}deg)` };

        return (
            <div className={ block('clock') }>
                <div className={ block('hand', { unit }) } style={ style }></div>
            </div>
        );
    },

    renderTime() {
        const { unit } = this.props;
        const time = getTime(unit);
        const type = unit === 'hour' ? 'hrs' : unit.slice(0,3);

        return (
            <div className={ block('value', ['time']) }>
                { `${time} ${type}` } 
            </div>
        );
    },

    render() {
        const { unit } = this.props;
        const angle = getAngle(unit);
        const style = { backgroundColor: getColor(angle) };

        return (
            <div className={ block({ unit }) } style={ style }>
                <div className={ block('text') }>
                    <div className={ block('value', ['angle']) }>
                        { angle }
                    </div>
                    { this.renderTime() }
                </div>
                { this.renderClock() }
            </div>
        )
    }

});

export default Color;
