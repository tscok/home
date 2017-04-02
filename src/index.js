import React from 'react';
import { render } from 'react-dom';

import { Site } from './site/components';

import './index.less';


render(
    <Site />,
    document.getElementById('site')
);
