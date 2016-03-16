var React = require ('react');

module.exports = React.createClass({
	getInitialState:function(){
		return {input:""};

	},
	handleInputName:function(e){
		this.setState({input : e.target.value});
	},
	addItem:function(e){
		e.preventDefault();
		console.log("Adding items", this.state.input);

	},
	render: function(){
		return (
			<div className='list-addItem'>
				<form onSubmit={this.addItem}>
					<input value={this.state.input} onChange={this.handleInputName}/>
					<button> Add Item
					</button>
				</form>
			</div>
		);
	}
});
