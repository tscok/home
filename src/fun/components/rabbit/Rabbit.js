import React from 'react';
import ReactDOM from 'react-dom';
import purebem from 'purebem';

import './Rabbit.less';


let delay = 2000;

const colors = [
    'aqua', 'deeppink', 'deepskyblue', 'ghostwhite',
    'mediumspringgreen', 'orangered'
];

const block = purebem.of('rabbit');

const Rabbit = React.createClass({

    getSample() {
        const index = Math.floor(Math.random() * colors.length);
        return colors[index];
    },

    isNonWordChar(char) {
        return /\W/.test(char);
    },

    renderChar(char, index) {
        delay += this.isNonWordChar() ? 200 : 100;

        const style = {
            animationDelay: `${delay}ms`,
            maxWidth: '9px',
            width: '0px'
        };

        const html = {
            __html: char.replace(' ', '&nbsp;')
        };
        
        return (
            <span
                className={ block('char') }
                dangerouslySetInnerHTML={ html }
                ref={ (r) => this.span = r }
                style={ style }
                key={ index } />
        );
    },

    render() {
        const color = this.getSample();
        const text = `Follow the ${color} rabbit.`;
        const chars = text.split('');

        return (
            <div className={ block() }>
                <div className={ block('prompt') } style={{ color }}>
                    {
                        [].map.call(chars, this.renderChar)
                    }
                </div>
            </div>
        );
    }
});

export default Rabbit;
