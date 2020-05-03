import React, { Component } from 'react';
import { Grid , Cell } from 'react-mdl';
class Covid extends Component {
  render() {
  	return (
  		<div className="covid-body">
  		<Grid className="covid-grid">
  		<Cell col={12}>

  		<h2>What is COVID-19?</h2> 
  		<img
  			src="https://cdn.iconscout.com/icon/premium/png-256-thumb/coronavirus-2263171-1883058.png"
  			alt="avatar"
  			style={{height:'500 px'}}
  			/>
  			<p style={{width:'75%',margin:'auto', paddingTop:'2em'}}>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 

The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes  </p>
  		</Cell>
  		</Grid>
  		</div>
  	)
  }
}

export default Covid; 
