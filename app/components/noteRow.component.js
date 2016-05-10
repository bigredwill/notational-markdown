import React from 'react';

class NoteRow extends React.Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onSelectNote(this.props.note);
	}

	render() {

		return (
			<tr className={this.props.className} onClick={this.handleClick}>
				<td>{this.props.note.name}</td>
				<td>{this.props.note.tags}</td>
				<td>{this.props.note.date}</td>
			</tr>
		);
	}
}

export default NoteRow