import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TasksPage from './components/TasksPage';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }

  // Should be using apollo here to wrap the entire app in the provider

  render() {
    return (
      <div>
        <NavBar />
        <TasksPage />
      </div>
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

