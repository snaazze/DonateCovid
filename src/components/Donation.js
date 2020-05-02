import React, { Component } from 'react';
import Card from '../Cards/Cards';
import "../Cards/Styles/Cards.css"
class Donation extends Component {
  render() {
      
  	return (
  		<div className="">
          <h1 className="heading">Donation Link</h1>
          <p className="heading2">Let’s support organisations working on the ground to provide COVID-19 relief and aid! 
          Contribute to any of the below fundraisers to support India’s fight against the coronavirus 
          and help the less privileged during this lockdown. </p>
          <Card />
  		</div>
  	)
  }
}

export default Donation; 
