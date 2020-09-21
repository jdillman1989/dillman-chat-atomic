import React from 'react';

const LoginStatus = ( props ) => {
	return ( <p className='small'>Logged in as <strong>{props.email}</strong></p> );
};

export default LoginStatus;