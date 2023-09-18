import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    console.log(countryAndCapitalsList)
    const country = countryAndCapitalsList.filter(
      each => each.id === activeCapitalId,
    )[0]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <select
            className="dropdown"
            value={activeCapitalId}
            name="countries"
            id="capitals"
            onChange={this.onChangeCapital}
          >
            {countryAndCapitalsList.map(each => {
              console.log(each)
              return (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              )
            })}
          </select>
          <label htmlFor="capitals"> is capital of which country?</label>
          <p className="para">{country.country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
