import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserInfo, IMessage } from '../interfaces';

interface InitialStateProps {
	messages: Array<IMessage>;
	users: Array<IUserInfo>;
}

const initialState: InitialStateProps = {
	messages: [],
	users: [],
};

export const chatSlice: any = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		addMessage: (state, action: PayloadAction<IMessage>) => {
			state.messages = [...state.messages, action.payload];
		},
		setMessages: (state, action: PayloadAction<IMessage[]>) => {
			state.messages = action.payload;
		},
		setUsers: (state, action: PayloadAction<IUserInfo[]>) => {
			state.users = action.payload;
		},
	},
});

export const { addMessage, setMessages, setUsers } = chatSlice.actions;

export default chatSlice.reducer;
