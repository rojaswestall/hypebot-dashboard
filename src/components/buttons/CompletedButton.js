import React, { Component } from 'react';
// import request from '../api/request';

class CompletedButton extends Component {

	constructor(props) {
		super(props);
		// this.makeRequest = this.makeRequest.bind(this);
	}


	// makeRequest() {
	// 	request({
	// 		method: 'post',
	// 		url: '/handleMessage'
	// 	}).then((response) => {
	// 		console.log(response);
	// 	})
	// }
	// This nneds to call out to the db with the task id
	// Say that this task is done

	render() {
		return (
			<button type="button" className="btn btn-complete" onClick={this.makeRequest}>Complete</button>
		);
	}
}

export default CompletedButton;