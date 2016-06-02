import React from 'react';
import ReactDOM from 'react-dom';

import NoteStore from './store/NoteStore.js';
import FilterableNoteTable from './components/FilterableNoteTable.component';
import Editor from './components/Editor.component';


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

	executionTimeRequire (name) { 
		return require(name); 
	}

	componentWillMount() {
		// var ipc = this.executionTimeRequire('ipc');

		// ipc.on('focus-command', function() {
		// 	//focus on search bar
		// 	alert("focus!");
		// });
		// ipc.on('enter-command', function() {

		// });


		NoteStore.subscribe(this.updateNotes);
	}

	componentWillUnmount() {
		NoteStore.unsubscribe(this.updateNotes);
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

	newNote() {
		NoteStore.newNote();
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
    document.getElementById('app')
);	