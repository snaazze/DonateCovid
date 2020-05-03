import React, { Component } from 'react';
import Card from '../Cards/Cards';
import "../Cards/Styles/Cards.css"
import CardsSearch from '../Cards/CardsSearch';
import Autocomplete from '../Cards/Autocomplete';
class Donation extends Component {

  render() {

    return (
      <div className="">

   

        <h1 className="heading">Donation Link</h1>

        <p className="heading2">Let’s support organisations working on the ground to provide COVID-19 relief and aid!
        Contribute to any of the below fundraisers to support India’s fight against the coronavirus
          and help the less privileged during this lockdown. </p>

        <Autocomplete
          options={[
            "Madhya Pradesh",
            "Maharashtra",
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Orissa",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telagana",
            "Tripura",
            "Uttarakhand",
            "Uttar Pradesh",
            "West Bengal"
          ]}
        />


        <Card />
   
      </div>
    )
  }
}

export default Donation; 
