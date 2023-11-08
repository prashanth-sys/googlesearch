// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {stateInput: ''}

  onChangeSearchInput = event => {
    this.setState({stateInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {stateInput} = this.state
    const searchResults = suggestionsList.filter(eachUser =>
      eachUser.suggestion.includes(stateInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="input-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              type="search"
              className="input"
              onChange={this.onChangeSearchInput}
              placeholder="Google Search"
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem key={eachItem.id} googleListDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
