import React, { Component } from 'react'

export class JobListItem extends Component {
    render() {
        return (
            <li>
                <h5>{this.props.title}</h5>
                <p>{this.props.description}</p>
                <p>{this.props.pay}</p>
            </li>
        )
    }
}

export default JobListItem
