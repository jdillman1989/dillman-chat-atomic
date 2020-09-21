import React from 'react';
import { Link } from 'react-router-dom';

const SigninLink = () => {
	return ( <p className='small'><br/>Don't have an account? <Link to='/signup'>Sign Up</Link></p> );
};

export default SigninLink;