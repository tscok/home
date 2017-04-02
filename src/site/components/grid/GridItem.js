import React from 'react';
import purebem from 'purebem';


const block = purebem.of('grid');

const GridItem = React.createClass({
    render() {
        return (
            <div className={ block('item') }>
                { this.props.children }
            </div>
        );
    }
});

export default GridItem;
