import React, { PropTypes } from 'react';
import purebem from 'purebem';


const block = purebem.of('clock');

const ClockFace = React.createClass({

    getMarks() {
        const marks = [];

        for (var i = 0; i < 60; i++) {
            const angle = i * 6;
            marks.push(angle);
        }

        return marks;
    },

    renderMark(angle, index) {
        const rotation = { transform: `rotate(${angle}deg)` };

        return (
            <div className={ block('mark-container') } key={ index } style={ rotation }>
                <div className={ block('mark') }></div>
            </div>
        )
    },

    render() {
        const marks = this.getMarks();

        return (
            <div className={ block('face') }>
                {
                    [].map.call(marks, this.renderMark)
                }
                <div className={ block('hub') }></div>
            </div>
        );
    }

});

export default ClockFace;
