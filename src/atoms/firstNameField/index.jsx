import React, { useEffect, useState } from 'react';
import style from './index.module.css';

const TextInputField = ({ heading, userInput }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value.trim()) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  return (
    <div className={style.font}>
      <h1 className={style.heading}>{heading}</h1>
      <input
        className={style.input}
        type="text"
        placeholder={userInput}
        value={inputValue}
        onChange={handleInputChange}
      />
      {error && <p className={style.error}>{error}</p>}
    </div>


  );
};

const DropdownField = ({ heading, userInput }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value.trim()) {
      setError('This field is required');
    } else {
      setError('');
    }
  };

  return (
    <div className={style.font}>
      <h1 className={style.heading}>{heading}</h1>
      <select placeholder={userInput} className={style.input}   onChange={handleInputChange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Trangender">trangender</option>
      </select>
      {error && <p className={style.error}>{error}</p>}
    </div>
    


  );
};


const InputField = ({heading,userInput,type})=>{
  if(type == "text"){
    return <TextInputField heading={heading} userInput={userInput}></TextInputField>
  }
  else if (type == "dropdown"){
    return <DropdownField heading={heading} userInput={userInput}></DropdownField>

  }
}


export default InputField;
