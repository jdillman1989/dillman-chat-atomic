import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../atoms/Layout';
import Title from '../atoms/Title';
import SignupForm from '../molecules/SignupForm';

const Signup = () => {
	return (
		<Layout page='signup'>
			<div>
				<Title>Sign up to <Link to='/'>Dillman Chat</Link></Title>
				<SignupForm />
			</div>
		</Layout>
	)
}

export default Signup;