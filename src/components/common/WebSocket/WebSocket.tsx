import React, { useState, useCallback, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { CONSTANTS } from '../../../constants';
import { useAppContext } from '../../../utils';

const WebSocketDemo: React.FC = () => {
	const { userInfo } = useAppContext();

	// const socketUrl = CONSTANTS.WS_URL;

	const [messageHistory, setMessageHistory] = useState<MessageEvent<any>[]>([]);

	// const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
	//     queryParams: {
	//         _id: userInfo?._id
	//     },
	//     shouldReconnect: event => true,
	//     reconnectAttempts: 10,
	//     retryOnError:true
	// });

	// useEffect(() => {
	// 	if (lastMessage !== null) {
	// 		console.log(JSON.parse(lastMessage.data));
	// 		setMessageHistory((prev) => prev.concat(lastMessage));
	// 	}
	// }, [lastMessage]);
	//
	// const handleClickSendMessage = useCallback(() => {
	// 	const message = {
	// 		username: 'user',
	// 		text: 'input.value',
	// 		time: Date.now(),
	// 	};
	// 	sendMessage(JSON.stringify(message));
	// }, []);
	//
	// const connectionStatus = {
	// 	[ReadyState.CONNECTING]: 'Connecting',
	// 	[ReadyState.OPEN]: 'Open',
	// 	[ReadyState.CLOSING]: 'Closing',
	// 	[ReadyState.CLOSED]: 'Closed',
	// 	[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	// }[readyState];

	return (
		<div>
			{/*<button onClick={handleClickSendMessage} disabled={readyState !== ReadyState.OPEN}>*/}
			{/*	Click Me to send Hello*/}
			{/*</button>*/}
			{/*<div>The WebSocket is currently {connectionStatus}</div>*/}
			{/*{lastMessage ? <div>Last message: {lastMessage.data}</div> : null}*/}
			{/*<br/>*/}
			{/*<ul>*/}
			{/*	{messageHistory.map((message, idx) => (*/}
			{/*		<li key={idx}>{message ? message.data : null}</li>*/}
			{/*	))}*/}
			{/*</ul>*/}
		</div>
	);
};

export default WebSocketDemo;
