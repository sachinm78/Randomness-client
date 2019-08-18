import React from 'react'

class CommentForm extends React.Component {
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
                    Comment:
                    <input type="text" name="comment" />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit Comment</button>
                </div>
                
            </form>
        )
    }

}

export default CommentForm;
