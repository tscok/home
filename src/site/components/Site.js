import React from 'react';
import purebem from 'purebem';

import SiteHero from './SiteHero';
import SiteSection from './SiteSection';

import { Clock } from 'fun/components';

import './Site.less';


const block = purebem.of('site');

const Site = React.createClass({
    render() {
        return (
            <div className={ block() }>
                <SiteHero />
                <SiteSection>
                    <Clock />
                </SiteSection>
            </div>
        );
    }
});

export default Site;
