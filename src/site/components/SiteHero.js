import React from 'react';
import purebem from 'purebem';

import SiteSection from './SiteSection';

import './SiteHero.less';


const block = purebem.of('site-hero');

const SiteHero = React.createClass({
    render() {
        return (
            <SiteSection color="rebeccapurple">
                <div className={ block() }>
                    <div className={ block('title')}>TSCOK</div>
                    <div className={ block('subtitle') }>The Supreme Chief Overlord King</div>
                </div>
            </SiteSection>
        );
    }
});

export default SiteHero;
