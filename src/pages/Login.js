import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../atoms/Layout';
import Title from '../atoms/Title';
import LoginForm from '../molecules/LoginForm';
import SignupLink from '../molecules/SignupLink';

const Signin = () => {

	return (
		<Layout page='login'>
			<div>
				<Title>Sign in to <Link to='/'>Dillman Chat</Link></Title>
				<LoginForm />
				<SignupLink />
			</div>
		</Layout>
	)
}

export default Signin;