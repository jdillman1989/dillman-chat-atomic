import React from 'react';

const ConfirmField = ( props ) => {
	return (
		<input 
			placeholder="confirm password" 
			type="password" 
			name="confirm-password" 
			value={props.password}
		/>
	);
};

export default ConfirmField;