var React = require('react');
var action = require('./../actions/TruckItemCreator.jsx');

module.exports = React.createClass({
	toggleRent: function(e){
		e.preventDefault();
		if (this.props.item.rented){
			action.unbuy(this.props.item);
		}else{
			action.buy(this.props.item);
		}
	},
	delete: function(e){
		e.preventDefault();
		action.delete(this.props.item);
	},
	render:function (){
		return (
			<div>
			<div>
				<h3 className={`six columns ${this.props.item.rented ? "rented" : ""}`}>{this.props.item.name}</h3>
		</div>
		<form className="three columns" onSubmit={this.delete}>
			<button>&times;</button>
		</form>
		<form className="three columns" onSubmit={this.toggleRent}>
			<button className={this.props.item.rented ? "": "button-primary"}>{this.props.item.rented ? "unrent" : "rent"}</button>
		</form>
	</div>
		);
	}
});
