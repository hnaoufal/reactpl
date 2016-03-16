var dispatcher = require('./../dispatcher.js');

module.exports = {
	add: function(i){
		dispatcher.dispatch({
			payload: i,
			type: "truck-item:add"
		});
	}
};
