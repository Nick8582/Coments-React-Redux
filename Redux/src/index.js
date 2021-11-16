// External imports
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import comments from './reducers';

// Local imports
import App from './App'

// Assets
import './index.css'


const initialState = [
    {id: 1, name: 'Иван', commentText: 'Lorem lorem lorem' }
]

const store = createStore(
  comments,
  initialState
);

render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
)