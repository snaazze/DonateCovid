import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
class Symptoms extends Component {
  render() {
  	return (
  		<div className="covid-body">
  		<Grid className="covid-grid">
  		<Cell col={12}>

  		<h2>Symptoms of COVID-19?</h2> 
  		<img
  			src="https://img.pngio.com/symptom-icon-of-glyph-style-available-in-svg-png-eps-ai-symptom-png-256_256.png"
  			alt="avatar"
  			style={{height:'500 px'}}
  			/>
  			<p style={{width:'75%',margin:'auto', paddingTop:'2em'}}>The most common symptoms of COVID-19 are fever, dry cough, and tiredness. Some patients may have aches and pains, nasal congestion, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Some people become infected but only have very mild symptoms. Most people (about 80%) recover from the disease without needing hospital treatment. Around 1 out of every 5 people who gets COVID-19 becomes seriously ill and develops difficulty breathing. Older people, and those with underlying medical problems like high blood pressure, heart and lung problems, diabetes, or cancer , are at higher risk of developing serious illness. However anyone can catch COVID-19 and become seriously ill. Even people with very mild symptoms of COVID-19 can transmit the virus. People of all ages who experience fever, cough and difficulty breathing should seek medical attention.
  			 </p>
  		</Cell>
  		</Grid>
  		</div>
  	)
  }
}

export default Symptoms; 
