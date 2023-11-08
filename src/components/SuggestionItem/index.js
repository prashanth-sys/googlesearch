// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {googleListDetails} = props
  const {suggestion, id} = googleListDetails

  const onTextChane = id => {
    onInputText(id)
  }

  return (
    <li className="list-card">
      <div className="list-container">
        <p className="description">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="logo"
          onClick={onTextChane}
          alt="arrow"
        />
      </div>
    </li>
  )
}
export default SuggestionItem
