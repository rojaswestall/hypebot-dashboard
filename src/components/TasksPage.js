import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
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

	getKnightTaskTables(bro) {
		// Use the data from apollo here to map each bro's tasks into tables
		// Pass from props
		return (
			<KnightTable brother={bro}/>
		);
	}

	render() {
		return (
			<Query
			    query={gql`
			      {
			        listBrothers {
			        	id
			        	firstName
			        	lastName
			        	sirName
			        	email
			        	status
			        	crossingDate
			        	tasks {
			        		description
			        		originalDueDate
			        		dueDate
			        		partners
			        		notes
			        	}
			        }
			      }
			    `}
			>
				{({ loading, error, data }) => {
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;
					var brothers = data.listBrothers.sort((b1, b2) => { 
						if (Number(b1.crossingDate) > Number(b2.crossingDate)) {
							return 1;
						} else {
							return -1;
						}
						
					});
					return brothers.map((brother) => {
						if (brother.firstName !== "pins") {
							return (
								<div className="container" key={brother.id}>
									{this.getKnightTaskTables(brother)}
								</div>
							);
						}
					});
			    }}
			</Query>
		);
	}
}

export default TasksPage;
















