var dispatcher = require('./../dispatcher.js');
var helper = require('./../helpers/RestHelper.js');

function TruckItemStore(){
	var items = [];

helper.get("api/items")
.then(function(data){
	items = data;
	triggerListeners();
});

	var listeners = [];

	function getItems(){
		return items;
	}

	function addTruckItem(item){
		items.push(item);
		triggerListeners();

	}
	function deleteTruckItem(item){
		var index = items.findIndex(function(_item){
			return _item.name == item.name;
		});

		items.splice(index,1);
		triggerListeners();
	}
	function setTruckItemRented(item, isrented){
		var index = items.findIndex(function(_item){
			return _item.name == item.name;
		});
		item.rented = isrented || false;
		triggerListeners();

	}
	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		});
	}
	dispatcher.register(function(event){
		var split = event.type.split(':');
		if (split[0] ==='truck-item'){
			switch(split[1]){
				case "add":
					addTruckItem(event.payload);
				break;
				case "delete":
					deleteTruckItem(event.payload);
				break;
				case "buy":
					setTruckItemRented(event.payload,true);
				break;
				case "unbuy":
					setTruckItemRented(event.payload,false);
				break;
			}
		}
	});
	return{
		getItems:getItems,
		onChange:onChange
	};
}

module.exports = new TruckItemStore();

