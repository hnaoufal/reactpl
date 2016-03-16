var React = require('react');
var ReactDOM = require('react-dom');
var TruckItem = require ('./TruckItem.jsx');
var TruckListItemAdd = require ('./TruckListItemAdd.jsx');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Truck List </h1>
				<div>
					{
						this.props.items.map(function(item,index){
							return (
								<TruckItem item={item} key={"item"+index} />
							);
						})
					}
				</div>
				<TruckListItemAdd />
			</div>
		);
	}
});
