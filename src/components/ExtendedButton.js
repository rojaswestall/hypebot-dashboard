import React, { Component } from 'react';

class ExtendedButton extends Component {

	constructor(props) {
		super(props);
	}

	// This nneds to call out to the db with the task id
	// Say that this task is done

	render() {
		return (
			<button type="button" className="btn btn-extended">Extend</button>
		);
	}
}

export default ExtendedButton;