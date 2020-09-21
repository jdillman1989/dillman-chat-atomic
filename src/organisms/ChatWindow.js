import React, { useState, useEffect, useRef } from 'react';
import { auth, db } from '../services/firebase';
import MessageList from '../atoms/MessageList';
import Message from '../molecules/Message';
import ChatField from '../atoms/ChatField';
import ChatSubmit from '../atoms/ChatSubmit';
import LoginStatus from '../atoms/LoginStatus';

const ChatWindow = () => {

	const [user] = useState( auth().currentUser );
	const [chats, setChats] = useState( [] );
	const [content, setContent] = useState( '' );
	const [readError, setReadError] = useState( null );
	const [chatScroll, setChatScroll] = useState( true );
	const [writeError, setWriteError] = useState( null );

	const chatWindow = useRef( null );

	const handleScroll = ( e ) => {
		let element = e.target
		if (element.scrollHeight - element.scrollTop === element.clientHeight) {
			setChatScroll( true );
		} else {
			setChatScroll( false );
		}
	}

	const scrollToBottom = () => {
		chatWindow.current.scrollTop = chatWindow.current.scrollHeight;
	}

	const handleChange = ( e ) => {
		setContent( e.target.value );
	};

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		setWriteError( null );
		setContent( '' );
		try {
			if ( content !== '' ) {
				await db.ref( 'chats' ).push( {
					content: content,
					timestamp: Date.now(),
					uid: user.uid,
					email: user.email
				} );

				if ( chatScroll ) {
					scrollToBottom();
				}
			}
		} catch (error) {
			setWriteError( error.message );
		}
	};

	useEffect( () => {
		setReadError( null );
		try {
			db.ref( 'chats' ).on( 'value', ( snapshot ) => {
				let chats = [];
				snapshot.forEach( ( snap ) => {
					const snapVal = snap.val();
					snapVal.msgid = snap.key;
					chats.push( snapVal );
				} );
				setChats( chats );

				scrollToBottom();

				db.ref( 'registered/' + user.uid ).set({
					email: user.email,
					online: true
				});
			} );
		} catch ( error ) {
			setReadError( error.message );
		}
	}, [user] );

	return (
		<div>
			<MessageList onScroll={handleScroll} ref={chatWindow}>
				{ chats.map( chat => {
					return (
						<Message
							key={chat.timestamp}
							time={chat.timestamp}
							author={chat.email}
							userid={chat.uid}
							msgid={chat.msgid}
						>
							{chat.content}
						</Message>
					)
				} ) }
			</MessageList>
			<form className='chat-form' onSubmit={handleSubmit} autoComplete="off">
				<ChatField 
					onChange={handleChange}
					content={content}
				/>
				<div className='left-align'>
					<ChatSubmit/>
					<LoginStatus email={user.email}/>
					{writeError ? <p>{writeError}</p> : null}
					{readError ? <p>{readError}</p> : null}
				</div>
			</form>
		</div>
	);
}

export default ChatWindow;
