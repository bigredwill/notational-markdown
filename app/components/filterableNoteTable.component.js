import React from 'react';
import SearchBar from './searchbar.component'
import NoteTable from './noteTable.component'

//combines note table and searchbar
class FilterableNoteTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: ''
		};
		this.handleSearchInput = this.handleSearchInput.bind(this);
	}

	handleSearchInput(filterText) {
		this.setState({
			filterText: filterText
		});
	}

	render() {
		//Filter notes by filterText 
		var filtered = this.props.notes.filter( (note) => {
			if(note.name && note.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) 
				return false;
			else 
				return true;
		});

		return (
			<div className="filterableNoteTable">
				<SearchBar filterText={this.state.filterText} onUserInput={this.handleSearchInput}/>
				<NoteTable 
					notes={filtered}
					onSelectNote={this.props.onSelectNote}
					selectedNote={this.props.selectedNote}
				/>
			</div>

		)
	}

}

export default FilterableNoteTable