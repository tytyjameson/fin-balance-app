"use client";

import React,{ useState } from "react";
// import styles from "./NetIncome.module.css";

const NetIncome = ({ netIncome }) => {
  const [leftover, setLeftover ] = useState(0)
  const [userData, setUserData] = useState({
    mainIncome:"",
    secondaryIncome:"",
    rentMortgage: "",
    powerBill: "",
    miscCost: "",
    groceries: "",
    eatOut: "",
    takeOut: "",
    carPayment: "",
    gas: "",
    insurance: "",
    streamingServices: "",
    hobbies: "",
    miscEntertainment: "",
  });

  const handleChange = (event) => {
    const { name , value } = event.target;
    
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    //do that math here to get leftover money( if any ) and then update the state
    const netTotalArr = Object.values(userData);
    const netTotal = netTotalArr.reduce((el) => {
      //each element needs to be converted to int and reduced. 
    })
    console.log('incoming data', userData )
  }

  return (
    <div /*className={}*/>
      <h2>Net Income</h2>
      <form onSubmit={handleSubmit}>
        <h3>Total Income</h3>
          <div>
            <h4>This is your main income that you take home after taxes.</h4>
            <input name="mainIncome" placeholder="Main Income After Taxes" value={userData.mainIncome} onChange={handleChange}></input>
            <h4>Let's face it, almost everyone has another source of income. This is for that.</h4>
            <input name="secondaryIncome" placeholder="Side hustle/Secondary Income Post Taxes" value={userData.secondaryIncome} onChange={handleChange}></input>
          </div>
        <h4>Expenses</h4>
          <div>
            <h4>Living Expenses</h4>
              <input name="rentMortgage" placeholder="Rent or Mortgage" value={userData.rentMortgage} onChange={handleChange}></input>
              <input name="powerBill" placeholder="Power Bill Average" value={userData.powerBill} onChange={handleChange}></input>
              <input name="miscCost" placeholder="Misc Cost for Domicile like Water, Trash, Parking Pass,etc..." value={userData.miscCost} onChange={handleChange}></input>
            <h4>Food Expenses</h4>
              <input name="groceries" placeholder="Groceries Monthly Average" value={userData.groceries} onChange={handleChange}></input>
              <input name="eatOut" placeholder="Eating Out Cost" value={userData.eatOut} onChange={handleChange}></input>
              <input name="takeOut" placeholder="Delivery and Takehome Food Cost Monthly Average" value={userData.takeOut} onChange={handleChange}></input>
            <h4>Transpertion Cost</h4>
              <input name="carPayment" placeholder="Car Cost(ex. payment, repair/maintance)" value={userData.carPayment} onChange={handleChange}></input>
              <input name="gas" placeholder="Gas" value={userData.gas} onChange={handleChange}></input>
              <input name="insurance" placeholder="Insurance" value={userData.insurance} onChange={handleChange}></input>
            <h4>Fun Money: Things For Entertainment</h4>
              <input name="streamingServices" placeholder="Streaming Services Subsription Cost" value={userData.streamingServices}onChange={handleChange}></input>
              <input name="hobbies" placeholder="Hobbies Cost (collectibles and sport cost)" value={userData.hobbies}onChange={handleChange}></input>
              <input name="miscEntertainment" placeholder="Things like Movies, Video Games, Amusment Parks, Shows ... etc" value={userData.miscEntertainment}onChange={handleChange}></input>
          </div>
            <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Total Leftover Money</h3>
        <h2>{}</h2>
      </div>
    </div>
  )}
//this component will need to pass the income data to the parent in order to compare leftover money to wants/wishes section for trip or thing planning. 
  export default NetIncome; 