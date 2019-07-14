import React from 'react';
import './App.css';
import Header from './components/Header';
import JobListings from './components/job_listings/JobListings';
import AddJob from './components/add_job/AddJob';
import Footer from './components/Footer';

/*
[
  {"id":1,"title":"Demolitions Manager","description":"Please destroy things for us.","pay":"$50,000 per year","interested":["T-Rex"]},
  {"id":2,"title":"Tree Trimming Specialist","description":"Responsible for keeping trees and bushes well trimmed and away from structures. Must be able to dispose of trimmings.","pay":"$23.50 per hour","interested":["Utahraptor",""]},
  {"id":3,"title":"Dog Walker","description":"Looking for a dog lover to take our furry friends out three times a day.","pay":"$15 per hour","interested":["Dromiceiomimus"]},
  {"id":4,"title":"Philosopher","description":"An ink sees a colombia as a boxlike composition. We can assume that any instance of a currency can be construed as a charming macaroni. If this was somewhat unclear, barish lyrics show us how himalayans can be fathers. A statement can hardly be considered a backless denim without also being a feeling.","pay":"24% equity","interested":["T-Rex","Utahraptor"]}
]
*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      JobListings: []
    }
    //this.newJob = this.newJob.bind(this)
  }

  getJobListingData = () => {
    fetch('./job_listings.json')
      .then(response => response.json())
      .then(resJSON => {
        this.setState({
          JobListings: resJSON
        })
      })
  }

  newJob = (job) =>{
    //way 1
    // let tempJobListings = this.state.JobListings;
    // tempJobListings.push(job)
    // this.setState({
    //   JobListings: tempJobListings
    // })

    //way 2
    this.setState({
      JobListings: this.state.JobListings.concat(job)
    });
  }

  componentDidMount() {
    this.getJobListingData();
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <JobListings 
            JobListings={this.state.JobListings}
          />
          <AddJob
            newJob={this.newJob}
          />
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App
