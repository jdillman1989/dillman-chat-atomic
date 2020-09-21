import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../atoms/Layout';
import Title from '../atoms/Title';

const Home = () => {

	return (
		<Layout page='home'>
			<div>
				<Title>Welcome to Dillman Chat</Title>
				<p>New here? <Link to='/signup'>Sign up</Link></p>
				<p>Join the conversation! <Link to='/login'>Sign in</Link></p>
			</div>
		</Layout>
	)
}

export default Home;