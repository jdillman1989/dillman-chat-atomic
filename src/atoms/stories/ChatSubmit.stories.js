import React from 'react';
import { storiesOf } from '@storybook/react';

import ChatSubmit from '../ChatSubmit';

storiesOf('ChatSubmit', module)
	.add('default', () => <ChatSubmit />)