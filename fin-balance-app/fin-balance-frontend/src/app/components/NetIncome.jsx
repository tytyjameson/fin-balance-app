"use client";

import React,{ useState } from "react";
// import styles from "./NetIncome.module.css";

const NetIncome = ({ netIncome }) => {
  const [leftover, setLeftover ] = useState(0)
  const [userData, setUserData] = useState({
    mainIncome:"",
    secondaryIncome:"",
    expenses : {
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
                }
  });

  const handleChange = (event) => {
    const { name , value } = event.target;
    
    setUserData((prevData) => ({
      ...prevData,
      expenses: {
      ...prevData.expenses,
      [name]: value,
      }
    }));
    
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    //Need to go over math and methods. gettting NaN & incomes are not showing up in input fields. Fix that first. 
    const grossTotaIncome = parseInt(userData.mainIncome) + parseInt(userData.secondaryIncome);
    const totalExpenseArr = Object.values(userData.expenses).map((el) => parseInt(el));
    const netTotalExpenses = totalExpenseArr.reduce((acc, cur) =>  acc + cur, 0);
    // setLeftover((grossTotaIncome - netTotalExpenses).toString());   
    console.log(grossTotaIncome)
  };

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
              <input name="rentMortgage" placeholder="Rent or Mortgage" value={userData.expenses.rentMortgage} onChange={handleChange}></input>
              <input name="powerBill" placeholder="Power Bill Average" value={userData.expenses.powerBill} onChange={handleChange}></input>
              <input name="miscCost" placeholder="Misc Cost for Domicile like Water, Trash, Parking Pass,etc..." value={userData.expenses.miscCost} onChange={handleChange}></input>
            <h4>Food Expenses</h4>
              <input name="groceries" placeholder="Groceries Monthly Average" value={userData.expenses.groceries} onChange={handleChange}></input>
              <input name="eatOut" placeholder="Eating Out Cost" value={userData.expenses.eatOut} onChange={handleChange}></input>
              <input name="takeOut" placeholder="Delivery and Takehome Food Cost Monthly Average" value={userData.expenses.takeOut} onChange={handleChange}></input>
            <h4>Transpertion Cost</h4>
              <input name="carPayment" placeholder="Car Cost(ex. payment, repair/maintance)" value={userData.expenses.carPayment} onChange={handleChange}></input>
              <input name="gas" placeholder="Gas" value={userData.expenses.gas} onChange={handleChange}></input>
              <input name="insurance" placeholder="Insurance" value={userData.expenses.insurance} onChange={handleChange}></input>
            <h4>Fun Money: Things For Entertainment</h4>
              <input name="streamingServices" placeholder="Streaming Services Subsription Cost" value={userData.expenses.streamingServices}onChange={handleChange}></input>
              <input name="hobbies" placeholder="Hobbies Cost (collectibles and sport cost)" value={userData.expenses.hobbies}onChange={handleChange}></input>
              <input name="miscEntertainment" placeholder="Things like Movies, Video Games, Amusment Parks, Shows ... etc" value={userData.expenses.miscEntertainment}onChange={handleChange}></input>
          </div>
            <button type="submit">Submit</button>
      </form>
      <div>
        <h3>Total Leftover Money</h3>
        <h2>{leftover}</h2>
      </div>
    </div>
  )}
//this component will need to pass the income data to the parent in order to compare leftover money to wants/wishes section for trip or thing planning. 
  export default NetIncome; 