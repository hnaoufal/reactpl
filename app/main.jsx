var React = require('react');
var ReactDOM = require('react-dom');
var TruckItemStore = require ('./stores/TruckItemStore.jsx');
var TruckItemList = require('./components/TruckItemList.jsx');



var initial = TruckItemStore.getItems();

function render(){
ReactDOM.render(<TruckItemList items={initial} />,app);
}
TruckItemStore.onChange(function(items){
	initial = items;
	render();
});

render();
