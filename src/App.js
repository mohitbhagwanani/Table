import React from "react";
import Table from "./Table";
import Add from "./Add";
import "./App.css";
import { Switch, Route } from "react-router-dom";

const App = () => {

 return(
   <>
<Switch>
<Route exact path="/" component={Table}/>
  <Route path='/add' component={Add}/>
 
</Switch>

   </>
 )
   
  };
 
  export default App;











  // const [country,setCountry]=useState("");
  // const [state,setState]=useState("");
  // const [city,setCity]=useState("");
  
  // const [editFormData, setEditFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   gender:"",
  //   qualification: "",
  //   dob:"",
  //   country:"",
  //   state:"",
  //   city:"",
  // });



  // const [editContactId, setEditContactId] = useState(null);

  // const handleAddFormChange = (event) => {
  //   event.preventDefault();

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...addFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setAddFormData(newFormData);

 

  // };

  // const handleEditFormChange = (event) => {
  //   event.preventDefault();
        

  //   const fieldName = event.target.getAttribute("name");
  //   const fieldValue = event.target.value;

  //   const newFormData = { ...editFormData };
  //   newFormData[fieldName] = fieldValue;

  //   setEditFormData(newFormData);
  
  // };

  // const handleAddFormSubmit = (event) => {
  //   console.log(event,"abc")
  //   event.preventDefault();

  //   const newContact = {
  //     id: nanoid(),
  //     firstName: addFormData.firstName,
  //     lastName: addFormData.lastName,
  //     gender:addFormData.gender,
  //     qualification: addFormData.qualification,
  //    dob: addFormData.dob,
  //     country: country,
  //     state: state,
  //     city: city,
  //   };

  //   const newContacts = [...contacts, newContact];
  //   setContacts(newContacts);
  // };

  // const handleEditFormSubmit = (event) => {
  //   event.preventDefault();

  //   const editedContact = {
  //     id: editContactId,
  //     firstName: editFormData.firstName,
  //     lastName: editFormData.lastName,
  //     gender: editFormData.gender,
  //     qualification: editFormData.qualification,
  //     dob: editFormData.dob,
  //     country: editFormData.country,
  //     state: editFormData.state,
  //     city: editFormData.city,
    
  //   };

  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === editContactId);

  //   newContacts[index] = editedContact;

  //   setContacts(newContacts);
  //   setEditContactId(null);
  // };

  // const handleEditClick = (event, contact) => {
  //   event.preventDefault();
  //   setEditContactId(contact.id);

  //   const formValues = {
  //     firstName: contact.firstName,
  //     lastName: contact.lastName,
  //     gender: contact.gender,
  //     qualification: contact.qualification,
  //     dob: contact.dob,
  //     country: contact.country,
  //     state: contact.state,
  //     city: contact.city,
  //   };

  //   setEditFormData(formValues);
  // };

  // const handleCancelClick = () => {
  //   setEditContactId(null);
  // };

  // const handleDeleteClick = (contactId) => {
  //   const newContacts = [...contacts];

  //   const index = contacts.findIndex((contact) => contact.id === contactId);

  //   newContacts.splice(index, 1);

  //   setContacts(newContacts);
  // };

  
  
    


// console.log(addFormData,"abc")
// console.log(country,"india")



//   return (
    
  
//     <div className="app-container">
//       <form onSubmit={handleEditFormSubmit}>
//         <table>
//           <thead>
//             <tr>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Gender</th>
//               <th>Qualification</th>
//               <th>Date of Birth</th>
//               <th>Country</th>
//               <th>State</th>
//               <th>City</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((contact) => (
//               <Fragment>
//                 {editContactId === contact.id ? (
//                   <EditableRow
//                     editFormData={editFormData}
//                     handleEditFormChange={handleEditFormChange}
//                     handleCancelClick={handleCancelClick}
//                   />
//                 ) : (
//                   <ReadOnlyRow
//                     contact={contact}
//                     handleEditClick={handleEditClick}
//                     handleDeleteClick={handleDeleteClick}
//                   />
//                   )}
//                   </Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </form>
 

//       <h2>Add a Contact</h2>
//       <form onSubmit={handleAddFormSubmit} >
//         <input
//           type="text"
//           name="firstName"
//           required="required"
//           placeholder="Enter first name..."
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="text"
//           name="lastName"
//           required="required"
//           placeholder="Enter last name..."
//           onChange={handleAddFormChange}
//         />
//          Male:<input
//           type="radio"
//           name="gender"
//           value="male"
//           required="required"
          
//           onChange={handleAddFormChange}
//         />
//         Female: <input
//           type="radio"
//           name="gender"
//           value="female"
//           required="required"
          
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="text"
//           name="qualification"
//           required="required"
//           placeholder="Enter qualification..."
//           onChange={handleAddFormChange}
//         />
//         <input
//           type="date"
//           name="dob"
        
//           onChange={handleAddFormChange}
//         />
   
//   <select name="country" id="country" onChange={(event)=>{setCountry(event.target.value)}}>Country
//   <option value="india">India</option>
//   <option value="usa">USA</option>
//   <option value="uk">United Kingdom</option>
// </select>

// <select name="state" id="state" onChange={(event)=>{setState(event.target.value)}}>State
//   <option value="delhi">Delhi</option>
//   <option value="maharashtra">Maharashtra</option>
//   <option value="uttar pradesh">Uttar Pradesh</option>
// </select>

// <select name="city" onChange={(event)=>{setCity(event.target.value)}}>City
//   <option value="new delhi">New Delhi</option>
//   <option value="Pune">Pune</option>
//   <option value="Lucknow">Lucknow</option>
// </select>

//         <button type="submit">Add</button>
//       </form>
//       </div>
    
  
       
//   );
// };


// export default App;