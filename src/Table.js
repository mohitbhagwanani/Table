import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";


const Table= () => {

    const [contacts, setContacts] = useState(data);
 
    const [editFormData, setEditFormData] = useState({
        firstName: "",
        lastName: "",
        gender:"",
        qualification: "",
        dob:"",
        country:"",
        state:"",
        city:"",
      });

      const [editContactId, setEditContactId] = useState(null);

      const handleEditFormChange = (event) => {
        event.preventDefault();
            
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
    
        setEditFormData(newFormData);
      
      };
      
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      gender: editFormData.gender,
      qualification: editFormData.qualification,
      dob: editFormData.dob,
      country: editFormData.country,
      state: editFormData.state,
      city: editFormData.city,
    
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      firstName: contact.firstName,
      lastName: contact.lastName,
      gender: contact.gender,
      qualification: contact.qualification,
      dob: contact.dob,
      country: contact.country,
      state: contact.state,
      city: contact.city,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    


  
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Qualification</th>
              <th>Date of Birth</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                  )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </form>
          </div>
  );
}
export default Table;