import React from 'react';
import SimpleMDE from 'SimpleMDE/dist/simplemde.min.js';

class Editor extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.simplemde = null;
	}

	componentDidMount() {
		//forceSync makes SimpleMDE log changes to original textarea (defined in render())
		this.simplemde = new SimpleMDE({ 
													element: this.refs.editorTextArea,
													forceSync: true
												});
		this.simplemde.codemirror.on("change", function(){
		    this.handleChange();
		}.bind(this));
	}

	componentDidUpdate(prevProps, prevState) {
		this.simplemde.value(this.props.note.rawContent);
	}	

	shouldComponentUpdate(nextProps, nextState) {
		if(!nextProps.note || nextProps.note.rawContent == this.simplemde.value())
			return false;
		else 
			return true;
	}

	handleChange() {
		if(this.props.note) {
			this.props.note.rawContent = this.refs.editorTextArea.value;
			this.props.onEditNote(this.props.note);
		}
	}

	render() {
		console.log(this.props.note);
		return (
			<div className="editor">
				<textarea 
					id="editorTextArea"
					onChange={this.handleChange}
					ref="editorTextArea"
					value={this.props.note ? this.props.note.rawContent : ""}
				/>
			</div>
		)
	}
}

export default Editor;