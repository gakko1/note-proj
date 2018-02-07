import React from 'react';
import { Link, Route } from 'react-router-dom';
import { getNotes } from '../actions';

export default class noteContainer extends React.Component {
  state = {
    notes: [],
  }

  componentDidMount() {
    this.setState({
      notes: this.props.getNotes()
    })
  }

  render() {
    return (
      <div>
        <h1>THESE ARE THE NOTES AVAILABLE</h1>
        <ul>
          {this.state.notes.map((item, i) => {
            return (
              <li key={i}>
                {/* <Link to={'./notes/' + item} component={notes.item}>{item.id}</Link>
                <Route path={'./notes/' + item} component={notes.item} /> */}
                {item.name}
                {item.note}
              </li>
            )
          })}
        </ul>               
      </div>
    )
  }
}