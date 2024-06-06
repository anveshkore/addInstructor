import React from 'react';
import InputField from './atoms/firstNameField';
import style from "./index.module.css";
import Button from "./atoms/button";



const App = ()=>{
    return(
        <>
        <div className={style.background}>
          <div className={style.main}>
            <InputField
              heading="First Name"
              userInput="Enter First Name"
              type="text"
              />
            <InputField
              heading="Last Name"
              userInput="Enter Last Name"
              type="text"
              />
          </div>
          <div className={style.second}>
            <InputField
              heading="Gender"
              userInput="Please Select"
              type="dropdown"
              />
            <InputField
              heading="Date of Birth"
              userInput="DD/MM/YY"
              type="text"
              />
          </div>
          <div className={style.third}>
            <InputField
              heading="Email Address"
              userInput="Enter Email Address"
              type="text"
              />
            <InputField
              heading="Mobile Number"
              userInput="Enter Mobile Number"
              type="text"
              />
          </div>

          <div className={style.button}>
        <Button buttonName="Cancle"></Button>
        <Button buttonName="Save"></Button>
       </div>
        </div>
      
        </>
    )
}


export default App;