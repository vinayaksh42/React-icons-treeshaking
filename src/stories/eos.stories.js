import React from 'react';
import { storiesOf } from '@storybook/react';

import { Wifi } from '../components';

const stories = storiesOf('Test', module);

stories.add('App', () => {
    return (
        <Wifi/>
    )
})