import React from 'react';
import Layout from '../atoms/Layout';
import ChatStatus from '../organisms/ChatStatus';
import ChatWindow from '../organisms/ChatWindow';

const Chat = () => {
	return (
		<div>
			<ChatStatus />
			<Layout page='chat'>
				<ChatWindow />
			</Layout>
		</div>
	);
}

export default Chat;
