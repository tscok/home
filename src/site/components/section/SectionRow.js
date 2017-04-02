import React from 'react';
import purebem from 'purebem';


const block = purebem.of('section');

const SectionRow = React.createClass({
    render() {
        return (
            <div className={ block('row') }>
                { this.props.children }
            </div>
        );
    }
});

export default SectionRow;
