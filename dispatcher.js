var nodeUuid = require('node-uuid');
var listerners = {};

module.exports ={
	register: function(cb){
		var id = nodeUuid.raw();
		listerners[id] = callback;
		return id;
	},
	dispatch: function(payload){
		console.info("Dispatcing...", payload);
		for (var id in listerners){
			var listener = listeners[id];
			listener(payload);
		}
	}
}
