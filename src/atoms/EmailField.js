import React from 'react';

const EmailField = ( props ) => {
	return (
		<input 
			placeholder="Email" 
			type="email" 
			name="email" 
			value={props.email}
		/>
	);
};

export default EmailField;