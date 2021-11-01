import React, { Component } from 'react';
import './App.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

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
        comment: '',
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

  validation = () => {

    if (this.state.from.name != '' && this.state.from.comment != '') {
      return true
    }

    return false
  }

  render() {

    return (
      <div className="App">
        {this.state.comments.map(comment => <div key={comment.id}>
          <span style={{ fontStyle: 'italic' }}>{comment.id} - {dayjs(comment.date).format('DD-MM-YYYY HH:mm:ss')}: </span>
          <strong>{comment.name}, </strong>
          <span>{comment.comment}</span>
          <button onClick={this.removeComment.bind(null, comment.id)}>Удалить комментарий</button>
        </div>)}
        <div className="form">
          <label>Имя: <input
            type="text"
            value={this.state.from.name}
            name="name"
            onChange={this.handleChange}
            required>
          </input>
          </label>
          <label>Коментарии: <textarea
            name="comment"
            value={this.state.from.comment}
            onChange={this.handleChange}
            required>
          </textarea>
          </label>
          <button onClick={this.addComment} disabled={!this.validation()}>Добавить коментарий</button>
        </div>
      </div>
    )
  }
}

export default App;
