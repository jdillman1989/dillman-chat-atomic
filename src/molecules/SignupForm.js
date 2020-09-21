import React, { useState } from 'react';
import { signup, googleSignup } from '../helpers/auth';
import { auth, db } from '../services/firebase';
import EmailField from '../atoms/EmailField';
import PasswordField from '../atoms/PasswordField';
import ConfirmField from '../atoms/ConfirmField';
import SignupButton from '../atoms/SignupButton';
import GoogleButton from '../atoms/GoogleButton';
import LoginLink from '../molecules/LoginLink';

const SignupForm = () => {

	const [error, setError] = useState( null );
	const [email, setEmail] = useState( '' );
	const [password, setPassword] = useState( '' );
	const [confirmPassword, setConfirmPassword] = useState( '' );

	const handleEmailChange = ( event ) => {
		setEmail( event.target.value );
	};

	const handlePasswordChange = ( event ) => {
		setPassword( event.target.value );
	};

	const handleConfirmPasswordChange = ( event ) => {
		setConfirmPassword( event.target.value );
	};

	// Call our wrappers for the firebase signin method
	const handleSubmit = async ( event ) => {
		event.preventDefault();
		setError( '' );
		if ( password === confirmPassword && confirmPassword !== '' ) {
			try {
				await signup( email, password );

				const newUser = auth().currentUser;
				db.ref( 'registered/' + newUser.uid ).set({
					email: email,
					online: true
				});
			} catch (error) {
				setError( error.message );
			}
		} else {
			setError( 'Password confirm does not match.' );
		}
	};

	const googleSignin = async ( event ) => {
		event.preventDefault();
		try {
			await googleSignup();
		} catch (error) {
			setError( error.message );
		}
	}

	// Build the form view with the initial states
	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			<div className='auth-form__inputs'>
				<EmailField onChange={handleEmailChange} email={email} />
				<PasswordField onChange={handlePasswordChange} password={password} />
				<ConfirmField onChange={handleConfirmPasswordChange} password={confirmPassword} />
			</div>
			{error ? <p>{error}</p> : null}
			<div className='center-align'>
				<SignupButton />
				<p>or</p>
				<GoogleButton onClick={googleSignin} />
			</div>
			<br/>
			<LoginLink />
		</form>
	)
}

export default SignupForm;