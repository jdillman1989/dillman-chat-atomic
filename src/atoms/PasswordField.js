import React from 'react';

const PasswordField = ( props ) => {
	return (
		<input 
			placeholder="password" 
			type="password" 
			name="password" 
			value={props.password}
		/>
	);
};

export default PasswordField;