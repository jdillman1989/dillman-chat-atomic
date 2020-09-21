import React from 'react';

const Title = (props) => {
	const { children, ...other } = props;
	return ( <h1 {...other}>{children}</h1> )
}

export default Title;