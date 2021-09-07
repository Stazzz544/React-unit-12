import {
	createSlice
} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		value: {},
		totalSum: 0
	},
	reducers: {
		increment: (state, data) => {
			
			let articul = data.payload.dataKey;
			
			if (state.value[articul] === undefined) 
			state.value[articul] = {
				count: null,
				cost: null,
				sum: null
			};
			if (!state.value[articul].cost) {
				state.value[articul].cost = +data.payload.cost;
			};

			state.value[articul].count++;
			state.value[articul].sum = state.value[articul].cost * state.value[articul].count
			state.totalSum += state.value[articul].cost

		},
		decrement: (state, data) => {
			let articul = data.payload;
			state.totalSum -= state.value[articul].cost
			state.value[articul].count--;
			if (state.value[articul].count === 0) delete state.value[articul];
			

		},
		deleteAc: (state, data) => {
			let articul = data.payload;
			state.totalSum -= state.value[articul].sum
			state.value[articul] = 0;
			delete state.value[articul];
			
		}
	}
});

export const {
	increment,
	decrement,
	deleteAc
} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectSum = state => state.cart.totalSum;
export default cartSlice.reducer;