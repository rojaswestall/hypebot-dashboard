import React, { Component } from 'react';
import CompletedButton from './buttons/CompletedButton';
import UpdateButton from './buttons/UpdateButton';
import RemoveButton from './buttons/RemoveButton';
import FailButton from './buttons/FailButton';
import FailExtendButton from './buttons/FailExtendButton';

class Task extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<tr>
				<th scope="row" className="align-middle">{this.props.index}</th>
				<td className="align-middle">{this.props.description}</td>
				<td className="align-middle">{this.props.dueDate}</td>
				<td className="align-middle">{this.props.notes}</td>
				<td><CompletedButton/></td>
				<td><UpdateButton/></td>
				<td><RemoveButton/></td>
				<td><FailExtendButton/></td>
				<td><FailButton/></td>
			</tr>
		);
	}
}

export default Task;