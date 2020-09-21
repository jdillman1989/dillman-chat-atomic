import React, { useState } from 'react';
import { auth, db } from '../services/firebase';
import { signout } from '../helpers/auth';
import SignoutButton from '../atoms/SignoutButton';
import UserList from '../molecules/UserList';

const ChatStatus = () => {
	const [readError, setReadError] = useState( null );
	const [user] = useState( auth().currentUser );

	const handleSignout = () => {
		setReadError( '' );
		try {
			signout();

			db.ref( 'registered/' + user.uid ).set({
				email: user.email,
				online: false
			});
		} catch (error) {
			setReadError( error.message );
		}
	};

	return (
		<div className='chat-top'>
			<div>
				<SignoutButton onClick={handleSignout}>Sign Out</SignoutButton>
				{readError}
			</div>
			<UserList/>
		</div>
	)
}

export default ChatStatus;