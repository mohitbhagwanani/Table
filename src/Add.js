import React from "react";
import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import {  Router } from "react-router-dom";

// import ReadOnlyRow from "./components/ReadOnlyRow";


const Add = () => {
    const [contacts, setContacts] = useState(data);
    const [country,setCountry]=useState("");
    const [state,setState]=useState("");
    const [city,setCity]=useState("");
    const [addFormData, setAddFormData] = useState({
      firstName: "",
      lastName: "",
      gender:"",
      qualification: "",
      dob:"",
      country:"",
      state:"",
      city:"",
     
    });
  
    const handleAddFormChange = (event) => {
        console.log(event,"sad");
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
  
   
  
    };
  

  
    const handleAddFormSubmit = (event) => {
      console.log(event,"abc");
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        firstName: addFormData.firstName,
        lastName: addFormData.lastName,
        gender:addFormData.gender,
        qualification: addFormData.qualification,
       dob: addFormData.dob,
        country: country,
        state: state,
        city: city,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    //   Router.push("/");
      window.open("/");

// setCheck(true);
    };
  
    
    
      
  

  
  console.log(contacts)
  
    return (
      <div className="app-container">
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit} >
          <input
            type="text"
            name="firstName"
            required="required"
            placeholder="Enter first name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="lastName"
            required="required"
            placeholder="Enter last name..."
            onChange={handleAddFormChange}
          />
           Male:<input
            type="radio"
            name="gender"
            value="male"
            required="required"
            
            onChange={handleAddFormChange}
          />
          Female: <input
            type="radio"
            name="gender"
            value="female"
            required="required"
            
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="qualification"
            required="required"
            placeholder="Enter qualification..."
            onChange={handleAddFormChange}
          />
          <input
            type="date"
            name="dob"
          
            onChange={handleAddFormChange}
          />
     
    <select name="country" id="country" onChange={(event)=>{setCountry(event.target.value)}}>Country
    <option value="india">India</option>
    <option value="usa">USA</option>
    <option value="uk">United Kingdom</option>
  </select>
  
  <select name="state" id="state" onChange={(event)=>{setState(event.target.value)}}>State
    <option value="delhi">Delhi</option>
    <option value="maharashtra">Maharashtra</option>
    <option value="uttar pradesh">Uttar Pradesh</option>
  </select>
  
  <select name="city" id="city" onChange={(event)=>{setCity(event.target.value)}}>City
    <option value="new delhi">New Delhi</option>
    <option value="Pune">Pune</option>
    <option value="Lucknow">Lucknow</option>
  </select>
  {/* <Link to='/'> */}
          <button type="submit" >Add</button>
          {/* <Link/> */}
        </form>
       
        </div>
      
    );
  };

  export default Add;