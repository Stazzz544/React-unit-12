import {
	createSlice
} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		value: {},
		amount: 0
	},
	reducers: {
		increment: (state, data) => {
			let articul = data.payload;
			if (state.value[articul] === undefined) state.value[articul] = 0;
			state.value[articul]++;
		},
		decrement: (state, data) => {
			let articul = data.payload;
			
			state.value[articul]--;
			if (state.value[articul] === 0) delete state.value[articul];

		},
		nullify: (state, data) => {
			let articul = data.payload;
			state.value[articul] = 0;
			delete state.value[articul];
		}
	}
});

export const {
	increment,
	decrement,
	nullify
} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;