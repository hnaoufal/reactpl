var dispatcher = require('./../dispatcher.js');

module.exports = {
	add(i){
		dispatcher.dispatch({
			payload: i,
			type: "truck-item:add"
		});
	},
	delete(i){
		dispatcher.dispatch({
			payload: i,
			type: "truck-item:delete"
		});
	},
	buy(i){
		dispatcher.dispatch({
			payload: i,
			type: "truck-item:buy"
		});
	},
	unbuy(i){
		dispatcher.dispatch({
			payload: i,
			type: "truck-item:unbuy"
		});
	}
};
