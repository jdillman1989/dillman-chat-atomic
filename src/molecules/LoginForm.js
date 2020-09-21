import React, { useState } from 'react';
import { signin } from '../helpers/auth';
import EmailField from '../atoms/EmailField';
import PasswordField from '../atoms/PasswordField';
import LoginSubmit from '../atoms/LoginSubmit';

const LoginForm = () => {

	const [error, setError] = useState( null );
	const [email, setEmail] = useState( '' );
	const [password, setPassword] = useState( '' );

	const handleEmailChange = ( event ) => {
		setEmail( event.target.value );
	};

	const handlePasswordChange = ( event ) => {
		setPassword( event.target.value );
	};

	// Call our wrappers for the firebase signin method
	const handleSubmit = async ( event ) => {
		event.preventDefault();
		setError( '' );
		try {
			signin( email, password );
		} catch (error) {
			setError( error.message );
		}
	};

	// Build the form view with the initial states
	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<div className='auth-form__inputs'>
				<EmailField onChange={handleEmailChange} email={email} />
				<PasswordField onChange={handlePasswordChange} password={password} />
			</div>
			{error ? <p>{error}</p> : null}
			<div className='center-align'>
				<LoginSubmit />
			</div>
		</form>
	)
}

export default LoginForm;