import React, { Component } from 'react';
import KnightTable from './KnightTable';

const fakeData = {
	Canis: {

	}
}

class TasksPage extends Component {

	constructor(props) {
		super(props);
		this.getKnightTaskTables = this.getKnightTaskTables.bind(this);
	}

	// Need apollo here to make graphql request so that we get all 
	// the data back for all the bros at once

	getKnightTaskTables() {
		// Use the data from apollo here to map each bro's tasks into tables
		// Pass from props
		return (
			<KnightTable />
		);
	}

	render() {
		return (
			<div className="container">
				This is the page to see all the tasks for knights!
				{this.getKnightTaskTables()}
			</div>
		);
	}
}

export default TasksPage;