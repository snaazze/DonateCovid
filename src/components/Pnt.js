import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl'; 
class Pnt extends Component {
  render() {
  	return (
  		<div className="covid-body">
  		<Grid className="covid-grid">
  		<Cell col={12}>

  		<h2>Prevention and Treatment of COVID-19?</h2> 
  		<img
  			src="https://cdn.iconscout.com/icon/premium/png-256-thumb/coronavirus-protection-mask-2252053-1877375.png"
  			alt="avatar"
  			style={{height:'500 px'}}
  			/>
  			<p style={{width:'75%',margin:'auto', paddingTop:'2em'}}>Currently there is no vaccine available for COVID-19.Wash your hands frequently for at least 20 seconds at a time with warm water and soap. How long is 20 seconds? About as long as it takes to sing your “ABCs.”
Don’t touch your face, eyes, nose, or mouth when your hands are dirty.
Don’t go out if you’re feeling sick or have any cold or flu symptoms.
Stay at least 6 feet(2 meters) away from people.
Cover your mouth with a tissue or the inside of your elbow whenever you sneeze or cough. Throw away any tissues you use right away.
Clean any objects you touch a lot. Use disinfectants on objects like phones, computers, utensils, dishware, and doorknobs. Wear Masks, Stay Indoors.
  			 </p>
  		</Cell>
  		</Grid>
  		</div>
  	)
  }
}

export default Pnt; 
