import React from 'react';
import purebem from 'purebem';

import './Grid.less';


const block = purebem.of('grid');

const Grid = React.createClass({
    render() {
        return (
            <div className={ block() }>
                { this.props.children }
            </div>
        );
    }
});

export default Grid;
