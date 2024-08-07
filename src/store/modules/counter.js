const counterModule = {
	state: {
		count: 1,
	},
	getters: {
		getDoubleCount(state) {
			return state.count * 2;
		},
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrement(state) {
			state.count--;
		},
	},
};

export default counterModule;
