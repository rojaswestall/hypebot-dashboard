import React, { Component } from 'react';

class AddTask extends Component {

	constructor(props) {
		super(props);
	}

	// This nneds to call out to the db with the task id
	// Say that this task is done

	// Add onHover to the tr and make a small css hover change
	// Add onclick to make it do something on click

	render() {
		return (
			<button type="button" className="btn btn-complete">
				Add task for Sir INSERT SIRNAME HERE
			</button>
		);
	}
}

export default AddTask;