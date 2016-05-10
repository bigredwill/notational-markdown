// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Search Component
import FilterableNoteTable from './components/FilterableNoteTable.component';
import Editor from './components/Editor.component';

var NOTES = [
	{name: "Grocery List", tags: "food", date:"12/1/2015",rawContent:"#Raw", id:1},
	{name: "Writing", tags: "practice", date:"12/2/2015",rawContent:"#Raw", id:2 },
	{name: "Writing", tags: "practice", date:"12/3/2015",rawContent:"#Raw", id:3},
	{name: "Stats161B Notes", tags: "classes", date:"12/3/2015",rawContent:"#Raw", id:4},
	{name: "Writing", tags: "practice", date:"12/4/2015",rawContent:"#Raw", id:5},
	{name: "Grocery List", tags: "food", date:"12/5/2015",rawContent:"#Raw", id:6},
	{name: "Stats161B", tags: "classes", date:"12/5/2015",rawContent:"#Raw", id:7}
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNote: ''
		};
		this.onSelectNote = this.onSelectNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
		this.notes = NOTES;
	}

	onSelectNote(note) {
		this.setState({
			selectedNote: note
		});
	}

	onEditNote(note, value) {
		var index = this.notes.findIndex((e,i) => {return e.id == note.id});
		this.notes[index].rawContent = value;
	}

	render() {
		return (
			<div className="app-container">
				<FilterableNoteTable notes={this.notes} onSelectNote={this.onSelectNote} selectedNote={this.state.selectedNote}/>
		    <Editor note={this.state.selectedNote} onEditNote={this.onEditNote}/>
	    </div>
		);
	}

}

// Render to ID content in the DOM
ReactDOM.render(
    <App/>,
    document.body
);	