import React from 'react';
import purebem from 'purebem';

import './Section.less';


const block = purebem.of('section');

const Section = React.createClass({
    render() {
        return (
            <section className={ block() }>
                <div className={ block('content') }>
                    { this.props.children }
                </div>
            </section>
        );
    }
});

export default Section;
