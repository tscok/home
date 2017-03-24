import React from 'react';
import purebem from 'purebem';

import './ClockFace.less';


const block = purebem.of('clock-face');

const ClockFace = React.createClass({

    getMarks() {
        const marks = [];

        for (var i = 0; i < 60; i++) {
            const angle = i * 6;
            marks.push(angle);
        }

        return marks;
    },

    renderMark(angle) {
        const style = { transform: `rotate(${angle}deg)` };

        return (
            <div className={ block('mark') } style={ style } />
        )
    },

    render() {
        const marks = this.getMarks();

        return (
            <div className={ block() }>
                { marks.map((angle) => this.renderMark(angle)) }
            </div>
        );
    }

});

export default ClockFace;
