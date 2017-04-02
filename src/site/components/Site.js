import React from 'react';
import purebem from 'purebem';

import Color from './Color';
import Grid from './grid/Grid';

import { Clock } from 'fun/components';

import './Site.less';


const block = purebem.of('site');

const Site = React.createClass({
    render() {
        return (
            <div className={ block() }>
                <Clock>
                    <Grid>
                        <Color unit="hour" />
                        <Color unit="minute" />
                        <Color unit="second" />
                    </Grid>
                </Clock>
            </div>
        );
    }
});

export default Site;
