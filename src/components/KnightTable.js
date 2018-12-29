import React, { Fragment, Component } from 'react';
import Task from './Task';
import AddTask from './buttons/AddTask';

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class KnightTable extends Component {

	constructor(props) {
		super(props);
		this.displayTasks = this.displayTasks.bind(this);
		this.getFormattedDate = this.getFormattedDate.bind(this);
		this.displayStatus = this.displayStatus.bind(this);
	}

	getFormattedDate(date) {
		var dateArr = date.toLocaleDateString().split("/");
		var mon = months[Number(dateArr[0]) - 1];
		var day = dateArr[1];
		var year = dateArr[2];
		return "" + mon + " " + day + ", " + year;
	}

	displayTasks() {

		// Sort the tasks by due date
		var tasks = this.props.brother.tasks;

		return tasks.map((task, i) => {
			var dueDate = new Date(Number(task.dueDate));
			var originalDueDate = new Date(Number(task.originalDueDate));
			return (
				<Task
					key={i}
					index={i + 1}
					id={this.props.brother.id} 
					description={task.description} 
					dueDate={this.getFormattedDate(dueDate)} 
					originalDueDate={this.getFormattedDate(originalDueDate)} 
					notes={task.notes} 
					partners={task.partners} 
				/>
			);
		});
	}

	displayStatus(status) {
		if (status === "active") {
			return (
				<span className="active">
					{status}
				</span>
			);
		} else {
			return (
				<span className="inactive">
					{status}
				</span>
			);
		}
	}

	// Conditionally render so if there are no tasks for a bro we say something else
	render() {
		if (this.props.brother.tasks.length === 0) {
			return (
				<div className="knight-table">
					<div className="knight-name">
						Sir {this.props.brother.sirName} has no tasks 🙂
					</div>
					<div className="knight-email">
						{this.props.brother.email}  |  {this.displayStatus(this.props.brother.status)}
					</div>

				</div>
			);
		} else {
			return (
				<div className="knight-table">
					<div className="knight-name">
						Sir {this.props.brother.sirName}
					</div>
					<div className="knight-email">
						{this.props.brother.email}  |  {this.displayStatus(this.props.brother.status)}
					</div>
					<table className="table table-striped table-borderless">
						<thead>
							<tr>
								<th scope="col">#</th>
								<th scope="col">Task</th>
								<th scope="col">Due</th>
								<th scope="col">Notes</th>
							</tr>
						</thead>
						<tbody>
							{this.displayTasks()}
						</tbody>
					</table>
					<AddTask sirName={this.props.brother.sirName}/>
				</div>
			);
		}
	}
}

export default KnightTable;