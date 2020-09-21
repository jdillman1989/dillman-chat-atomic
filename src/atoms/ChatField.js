import React from 'react';

const ChatField = ( props ) => {

	return (
		<input 
			type="text" 
			name="message" 
			placeholder="Say something"
			value={props.content}
		/>
	);
};

export default ChatField;