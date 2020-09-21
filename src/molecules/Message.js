import React, { useState } from 'react';
import { db, auth } from '../services/firebase';
import MessageEditButton from '../atoms/MessageEditButton';
import MessageEditField from '../atoms/MessageEditField';
import MessageEditSubmit from '../atoms/MessageEditSubmit';

const Message = ( props ) => {

	const [user] = useState( auth().currentUser );
	const [editing, setEditing] = useState( false );
	const [writeError, setWriteError] = useState( null );
	const [content, setContent] = useState( props.content );

	const handleChange = ( e ) => {
		setContent( e.target.value );
	};

	const handleSubmit = async ( e ) => {
		e.preventDefault();
		setWriteError( null );
		try {
			await db.ref( 'chats/' + props.msgid ).set({
				content: content,
				timestamp: props.time,
				uid: user.uid,
				email: user.email
			});
			setEditing( false );
		} catch (error) {
			setWriteError( error.message );
		}
	};

	const handleEdit = () => {
		setEditing( true );
	};

	return (
		<div className={`
			msg 
			${props.userid === user.uid
				? 'current'
				: ''
			}
		`}>
			<span>{props.author}</span>
			<div className='p'>
				{props.userid === user.uid
					? <MessageEditButton onClick={handleEdit}></MessageEditButton>
					: ''
				}
				{editing
					? <div>
						{writeError}
						<form onSubmit={handleSubmit} autoComplete="off">
							<MessageEditField onChange={handleChange} value={props.children}/>
							<MessageEditSubmit onClick={handleSubmit} />
						</form>
					</div>
					: props.children
				}
			</div>
		</div>
	);
}

export default Message;
