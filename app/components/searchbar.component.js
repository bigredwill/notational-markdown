import React from 'react';

class SearchBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.props.onUserInput(
			this.refs.filterTextInput.value
		);
	}
	
	render() {
		return (
			<form>
				<input 
					type="text" 
					placeholder="Search Notes" 
					value={this.props.filterText}
					ref="filterTextInput"
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default SearchBar