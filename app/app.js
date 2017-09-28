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
		this.onKeyPress = this.onKeyPress.bind(this);
		this.updateNotes = this.updateNotes.bind(this);
	}

	onKeyPress(props) {
		if(props.metaKey && props.key == "l") {
			this.newNote();
		} 
	}

	executionTimeRequire (name) { 
		return require(name); 
	}

	componentWillMount() {
		NoteStore.subscribe(this.updateNotes);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeyPress);
	}

	componentWillUnmount() {
		NoteStore.unsubscribe(this.updateNotes);
		document.removeEventListener('keydown', this.onKeyPress);
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
		//create new note and select it for focus
		let note = NoteStore.newNote("My New Note");
		this.onSelectNote(note);
	}

	render() {
		return (
			<div className="app-container" ref="app-container">
				<FilterableNoteTable notes={this.state.notes} onSelectNote={this.onSelectNote} selectedNote={this.state.selectedNote}/>
		    <Editor note={this.state.selectedNote} onEditNote={this.onEditNote}/>
	    </div>
		);
	}

}

// Render to ID content in the DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);	