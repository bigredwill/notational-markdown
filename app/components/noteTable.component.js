import React from 'react';
import NoteRow from './NoteRow.component'

class NoteTable extends React.Component {

	render() {
		var rows = [];
		this.props.notes.map( (note) => {
			var selectedId = (this.props.selectedNote ? this.props.selectedNote.id : -1);
			var className = (note.id === selectedId) ? "selectedNote" : "";
			className += " noteRow";
			rows.push(<NoteRow 
								note={note} 
								key={note.id}
								className={className}
								onSelectNote={this.props.onSelectNote}
								/>);
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Tags</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>

		);
	}
}

export default NoteTable