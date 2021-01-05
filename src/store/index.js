import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		username: "Name (change in options)",
		links: [
			{
				name: "Twitter",
				url: "https://twitter.com/",
			},
			{
				name: "Reddit",
				url: "https://reddit.com/",
			},
			{
				name: "Stackoverflow",
				url: "https://stackoverflow.com/",
			},
			{
				name: "Gmail",
				url: "https://mail.google.com/",
			},
		],
		loaded: false,
	},

	mutations: {
		LOADED: (state) => {
			state.loaded = true;
		},

		SET: (state, payload) => {
			Object.keys(payload).forEach(key => {
				if (!state.hasOwnProperty(key)) return;
				state[key] = payload[key];
			});
		},
	},

	actions: {
		async firstLoad({ commit }) {
			chrome.storage.sync.get(["username", "links"], (result) => {
				commit("SET", result);
				commit("LOADED");
			});
		},

		set({ commit }, payload) {
			chrome.storage.sync.set(payload, () => {
				commit("SET", payload);
			});
		},
	},

	modules: {
	},
});
