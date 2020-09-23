import React from 'react';
import { storiesOf } from '@storybook/react';

import MessageEditSubmit from '../MessageEditSubmit';

storiesOf('MessageEditSubmit', module)
	.add('default', () => <MessageEditSubmit />)