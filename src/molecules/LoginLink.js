import React from 'react';
import { Link } from 'react-router-dom';

const LoginLink = () => {
	return ( <p className='small'>Already have an account? <Link to='/login'>Sign In</Link></p> );
};

export default LoginLink;