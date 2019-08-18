import React from 'react'

class FeedbackForm extends React.Component {
    constructor() {
        super();

    this.state = {
        comment: ''
    }
    }


    handleSubmit = event => {
        event.preventDefault()

        this.props.handleEvent(this.state)
    }

    handleEvent = event => {
        this.setState({
            [event.target.comment]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <br />
                    <label>
                    Comment:
                    <textarea value={this.state.value} onChange={this.handleChange} cols={24} rows={5} />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit Comment</button>
                </div>
                
            </form>
        )
    }

}

export default FeedbackForm;
