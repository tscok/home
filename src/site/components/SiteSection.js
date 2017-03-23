import React, { PropTypes } from 'react';
import purebem from 'purebem';

import './SiteSection.less';


const block = purebem.of('site-section');

const SiteSection = React.createClass({

    propTypes: {
        color: PropTypes.string
    },

    getDefaultProps() {
        return {
            color: ''
        };
    },

    render() {
        const { color } = this.props;

        return (
            <section className={ block({ color }) }>
                { this.props.children }
            </section>
        );
    }
});

export default SiteSection;
