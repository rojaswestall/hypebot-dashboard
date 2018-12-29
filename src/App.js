import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NavBar from './components/NavBar';
import TasksPage from './components/TasksPage';
import './App.css';

const client = new ApolloClient({
  uri: "https://orc722is9j.execute-api.us-east-1.amazonaws.com/dev/dashBoard/graphql"
});

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <NavBar />
          <TasksPage />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

// <ApolloProvider>
//   <Navbar>
//   </Navbar>
//   <Router>
//     <PageForCurrentTasks />
//     <PageForCompleteHistoryAndStats />
//   </Router>
// </ApolloProvider>

// See current tasks
// Add tasks
// Delete current tasks
// Finish current tasks

// For later:
// Add another knight
// Remove a knight
// DATES

// Stats:
// History
// All past tasks
// percent completed
// time until finished

