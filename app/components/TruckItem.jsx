var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<h3 className={this.props.item.rented ? "rented" : ""}>{this.props.item.name}</h3>
		);

	}
});
