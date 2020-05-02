import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
class Spreads extends Component {
  render() {
  	return (
  		<div className="covid-body">
  		<Grid className="covid-grid">
  		<Cell col={12}>

  		<h2>How does COVID-19 spread?</h2> 
  		<img
  			src="https://global-uploads.webflow.com/5c17fc782f30f90cd15c25b4/5e6fd1270ad9f7aa80be04da_5728201%20-%20cough%20covid-19%20flu%20sick%20sneezing%20sniffling%20wheezing.png"
  			alt="avatar"
  			style={{height:'500 px'}}
  			/>
  			<p style={{width:'75%',margin:'auto', paddingTop:'2em'}}>People can catch COVID-19 from others who have the virus. The disease spreads primarily from person to person through small droplets from the nose or mouth, which are expelled when a person with COVID-19 coughs, sneezes, or speaks. These droplets are relatively heavy, do not travel far and quickly sink to the ground. People can catch COVID-19 if they breathe in these droplets from a person infected with the virus. This is why it is important to stay at least 1 metre (3 feet) away from others. These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails. People can become infected by touching these objects or surfaces, then touching their eyes, nose or mouth. This is why it is important to wash your hands regularly with soap and water or clean with alcohol-based hand rub.

WHO is assessing ongoing research on the ways that COVID-19 is spread and will continue to share updated findings.
  			 </p>
  		</Cell>
  		</Grid>
  		</div>
  	)
  }
}

export default Spreads; 
