import React from 'react';

const MessageList = ( props ) => {

	return (
		<div className="chats">
			{props.children}
		</div>
	);
}

export default MessageList;