var React = require('react');
var ReactDOM = require('react-dom');
var TruckItem = require ('./TruckItem.jsx');
var TruckListItemAdd = require ('./TruckListItemAdd.jsx');

module.exports = React.createClass({
	render(){
		return (
			<div className="container">
				<h1>Truck List </h1>
					{
						this.props.items.map(function(item,index){
							return (
								<div className="row">
								<TruckItem item={item} key={"item"+index} />
							</div>
							);
						})
					}
				<TruckListItemAdd />
			</div>
		);
	}
});
