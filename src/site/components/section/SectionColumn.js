import React from 'react';
import purebem from 'purebem';


const block = purebem.of('section');

const SectionColumn = React.createClass({
    render() {
        return (
            <div className={ block('column') }>
                { this.props.children }
            </div>
        );
    }
});

export default SectionColumn;
