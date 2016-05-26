import React from 'react';
import ReactDOM from 'react-dom';

import NoteStore from './controllers/NoteStore.js';
import FilterableNoteTable from './components/FilterableNoteTable.component';
import Editor from './components/Editor.component';

// var NOTES = [
// 	{name: "Grocery List", tags: "food", date:"12/1/2015",rawContent:"#Raw", id:1},
// 	{name: "Writing", tags: "practice", date:"12/2/2015",rawContent:"#Raw", id:2 },
// 	{name: "Writing", tags: "practice", date:"12/3/2015",rawContent:"#Raw", id:3},
// 	{name: "Stats161B Notes", tags: "classes", date:"12/3/2015",rawContent:"#Raw", id:4},
// 	{name: "Writing", tags: "practice", date:"12/4/2015",rawContent:"#Raw", id:5},
// 	{name: "Grocery List", tags: "food", date:"12/5/2015",rawContent:"#Raw", id:6},
// 	{name: "Stats161B", tags: "classes", date:"12/5/2015",rawContent:"#Raw", id:7}
// ];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNote: '',
			notes: NoteStore.getNotes()
		};
		this.onSelectNote = this.onSelectNote.bind(this);
		this.onEditNote = this.onEditNote.bind(this);
	}

	componentWillMount() {
		NoteStore.subscribe(this)
	}

	componentWillUnmount() {
		NoteStore.unsubscribe(this)
	}

	onSelectNote(note) {
		this.setState({
			selectedNote: note
		});
	}

	onEditNote(note) {
		NoteStore.editNote(note);
	}

	updateNotes() {
		this.setState({
			notes: NoteStore.getNotes()
		});
	}


	render() {
		return (
			<div className="app-container">
				<FilterableNoteTable notes={this.state.notes} onSelectNote={this.onSelectNote} selectedNote={this.state.selectedNote}/>
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