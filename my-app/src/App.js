import React, { Component } from 'react';
import './App.css';
import { format } from 'date-fns'

class App extends Component {
  state = {
    comments: [],
    from: {
      name: '',
      comments: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }

  addComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
          name: this.state.from.name,
          comment: this.state.from.comment,
          date: new Date()
        }
      ],
      from: {
        name: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }


  removeComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }
  
  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      from: {
        ...this.state.from,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.comments.map(comment => <div key={comment.id}>
          <span style={{ fontStyle: 'italic' }}>{comment.id} - {format(comment.date, 'dd/MM/yyyy')}: </span>
          <strong>{comment.name}, </strong>
          <span>{comment.comment}</span>
          <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
        </div>)}
        <div className="form">
          <label>Имя: <input
            type="text"
            value={this.state.from.name}
            name="name"
            onChange={this.handleChange}>
          </input>
          </label>
          <label>Коментарии: <textarea
            name="comment"
            value={this.state.from.comment}
            onChange={this.handleChange}>
          </textarea>
          </label>
          <button onClick={this.addComment}>Добавить коментарий</button>
        </div>
      </div>
    )
  }
}

export default App;
