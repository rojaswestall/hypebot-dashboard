import React, { Fragment, Component } from 'react';
import CompletedButton from './CompletedButton';
import ReassignedButton from './ReassignedButton';
import ExtendedButton from './ExtendedButton';
import DeleteButton from './DeleteButton';
import AddTask from './AddTask';

class KnightTable extends Component {

	constructor(props) {
		super(props);
		this.displayTasks = this.displayTasks.bind(this);
	}

	displayTasks() {
		// Need to map through all of the data that is passed to us through
		// the props to display them. Use the <Task /> component
		return (
			<Fragment>
				<tr>
					<th scope="row">1</th>
					<td>Make hypebot less spammy</td>
					<td>Sep. 9</td>
					<td><CompletedButton/></td>
					<td><ReassignedButton/></td>
					<td><ExtendedButton/></td>
					<td><DeleteButton/></td>
				</tr>
				<tr>
					<th scope="row">2</th>
					<td>Make a rough outline of the PM calendar</td>
					<td>Sep. 9</td>
					<td><CompletedButton/></td>
					<td><ReassignedButton/></td>
					<td><ExtendedButton/></td>
					<td><DeleteButton/></td>
				</tr>
				<tr>
					<th scope="row">3</th>
					<td>Change the points system excel sheet</td>
					<td>Sep. 9</td>
					<td><CompletedButton/></td>
					<td><ReassignedButton/></td>
					<td><ExtendedButton/></td>
					<td><DeleteButton/></td>
				</tr>
			</Fragment>
		);
	}

	// The extra columns are for Completed (Green), Reassigned (Blue), 
	// Extended (Yellow), Delete (Red)
	// Inside the body is where we can add another task, at the end 
	render() {
		return (
			<Fragment>
				<div className="knight-name">
					Marchitar
				</div>
				<table className="table table-striped table-borderless">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Task</th>
							<th scope="col">Due</th>
						</tr>
					</thead>
					<tbody>
						{this.displayTasks()}
					</tbody>
				</table>
				<AddTask />
			</Fragment>
		);
	}
}

export default KnightTable;