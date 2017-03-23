import React from 'react';
import purebem from 'purebem';

import SiteHero from './SiteHero';

import './Site.less';


const block = purebem.of('site');

const Site = React.createClass({
    render() {
        return (
            <div className={ block() }>
                <SiteHero />
            </div>
        );
    }
});

export default Site;
