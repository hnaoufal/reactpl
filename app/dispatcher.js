var uuid = require('node-uuid');
var listeners = {};

module.exports = {
	register: (cb)=>{
		var id = uuid.v1();
		listeners[id] = cb;
		return id;
	},
	dispatch: (payload)=>{
		console.info("Dispatching...", payload);
		for (var index in listeners){
			var listener = listeners[index];
			listener(payload);
		}
	}
};
