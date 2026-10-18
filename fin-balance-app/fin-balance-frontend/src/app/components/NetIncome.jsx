import React from "react";
// import styles from "./NetIncome.module.css";

const NetIncome = ({ netIncome }) => {
//   const [income, setIncome ] = useState(0)

  return (
    <div /*className={}*/>
      <h2>Net Income</h2>
      <form>
        <h3>Total Income</h3>
          <div>
            <h4>This is your main income that you take home after taxes.</h4>
            <input placeholder="Main Income After Taxes">{}</input>
            <h4>Let's face it, almost everyone has another source of income. This is for that.</h4>
            <input placeholder="Side hustle/Secondary Income Post Taxes"></input>
          </div>
        <h4>Expenses</h4>
          <div>
            <h4>Living Expenses</h4>
              <input placeholder="Rent or Mortgage"></input>
              <input placeholder="Power Bill Average"></input>
              <input placeholder="Misc Cost for Domicile like Water, Trash, Parking Pass,etc..."></input>
            <h4>Food Expenses</h4>
              <input placeholder="Groceries Monthly Average"></input>
              <input placeholder="Eating Out Cost"></input>
              <input placeholder="Delivery and Takehome Food Cost Monthly Average"></input>
            <h4>Transpertion Cost</h4>
              <input placeholder="Car Cost(ex. payment, repair/maintance)"></input>
              <input placeholder="Gas"></input>
              <input placeholder="Insurance"></input>
            <h4>Fun Money: Things For Entertainment</h4>
              <input placeholder="Streaming Services Subsription Cost"></input>
              <input placeholder="Hobbies Cost (collectibles and sport cost) "></input>
              <input placeholder="Things like Movies, Video Games, Amusment Parks, Shows ... etc"></input>
          </div>
      </form>
      <div>
        <h3>Total Leftover Money</h3>
        <h2>{}</h2>
      </div>
    </div>
  )}

  export default NetIncome; 