import React from 'react';

const UserDisplay = ( props ) => {
	return (
		<li className={props.online ? 'online' : ''}>
			{props.children}
		</li>
	);
};

export default UserDisplay;