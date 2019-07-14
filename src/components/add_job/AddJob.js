import React, { Component } from 'react'

export class AddJob extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            pay: '',
            description: ''
        };  
        //this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            title: '',
            pay: '',
            description: ''
        })

        /*Way 2*/
        let formData = new FormData(e.target);
        const data = {
            title: formData.get('title'),
            pay: formData.get('pay'),
            description: formData.get('description')
        }
        this.props.newJob(data);
    }


    render(props) {
        return (
            <aside id="side-bar">
                <h3>Add a Job</h3>
                <form className="job-form" onSubmit={this.onSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    <label htmlFor="pay">Compensation</label>
                    <input type="text" name="pay" value={this.state.pay} onChange={this.onChange}/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" rows="8" cols="40" value={this.state.description} onChange={this.onChange}></textarea>
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </aside>
        )
    }
}

export default AddJob
