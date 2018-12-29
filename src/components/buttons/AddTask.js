import React, { Component } from 'react';

class AddTask extends Component {

	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			description: "",
			dueDate: "",
			notes: ""
		}
		this.buttonText = this.buttonText.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.addTaskForm = this.addTaskForm.bind(this);
		this.submitNewTask = this.submitNewTask.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleDueDateChange = this.handleDueDateChange.bind(this);
		this.handleNotesChange = this.handleNotesChange.bind(this);
	}

	buttonText() {
		if (this.state.clicked) {
			return (
				<span> Hide new task form </span>
			);
		} else {
			return (
				<span> Add task for Sir {this.props.sirName} </span>
			);
		}
	}

	handleClick() {
		if (this.state.clicked) {
			this.setState({
				clicked: false,
				description: "",
				notes: "",
				dueDate: ""
			});
		} else {
			this.setState({
				clicked: true
			});
		}
	}

	handleDescriptionChange(e) {
		this.setState({description: e.target.value});
	}

	handleDueDateChange(e) {
		this.setState({dueDate: e.target.value});
	}
	
	handleNotesChange(e) {
		this.setState({notes: e.target.value});
	}

	addTaskForm() {
		if (this.state.clicked) {
			return (
				<div>
					<form className="new-task-form">
						<div className="form-group">
							<label>Description</label>
							<input 
								className="form-control"
								id="description-text"
								aria-describedby="taskDescription"
								value={this.state.description}
								onChange={this.handleDescriptionChange}
								placeholder="Enter new task"
							/>
						</div>
						<div className="form-group">
							<label>Due Date</label>
							<input 
								className="form-control"
								id="due-date-text"
								aria-describedby="taskDueDate"
								value={this.state.dueDate}
								onChange={this.handleDueDateChange}
								placeholder="Use format mm/dd/yyyy" 
							/>
						</div>
						<div className="form-group">
							<label>Notes</label>
							<input 
								className="form-control" 
								id="notes-text"
								aria-describedby="taskNotes"
								value={this.state.notes}
								onChange={this.handleNotesChange}
								placeholder="Notes are optional!"
							/>
						</div>
					</form>
					<button className="btn btn-primary" onClick={this.submitNewTask}>Submit</button>
				</div>
			);
		}
	}

	submitNewTask() {
		this.setState({
			clicked: false,
			description: "",
			notes: "",
			dueDate: ""
		});
		console.log(this.state);
	}

	// This nneds to call out to the db with the task id
	// Say that this task is done

	// Add onHover to the tr and make a small css hover change
	// Add onclick to make it do something on click

	render() {
		return (
			<div>
				<button type="button" className="btn btn-complete" onClick={this.handleClick}>
					{this.buttonText()}
				</button>
				{this.addTaskForm()}
			</div>
		);
	}
}

export default AddTask;