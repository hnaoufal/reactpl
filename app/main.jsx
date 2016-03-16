var React = require('react');
var ReactDOM = require('react-dom');

var TruckItemList = require('./components/TruckItemList.jsx');



var initial = [{
	name: "Truck X-C32"
},{
	name: "Truck B-32"
},{
	name: "Truck D-K2",
	rented: true
},{
	name: "Truck A-11"
}];

ReactDOM.render(<TruckItemList items={initial} />,app);
