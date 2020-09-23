import React from 'react';
import { storiesOf } from '@storybook/react';

import UserDisplay from '../UserDisplay';

storiesOf('UserDisplay', module)
	.add('online', () => <UserDisplay online={true}>test@example.com</UserDisplay>)
	.add('offline', () => <UserDisplay online={false}>test@example.com</UserDisplay>)