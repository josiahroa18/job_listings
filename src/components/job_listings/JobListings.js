import React, { Component } from 'react'
import JobListItem from './JobListItem';

export class JobListings extends Component {
    

    render() {
        let jobListings = this.props.JobListings.map(listing => 
            <JobListItem 
                key={listing.id} 
                title={listing.title} 
                description={listing.description} 
                pay={listing.pay}
            />)
        return (
            <section>
                <h2>Job Listings</h2>
                <ul id="job-listings">
                    {jobListings}
                </ul>
            </section>
        )
    }
}

export default JobListings
