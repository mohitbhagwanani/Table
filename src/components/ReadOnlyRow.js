import React from "react";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  console.log(contact,"components");
 
  return (
    <tr>

      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.gender}</td>
      <td>{contact.qualification}</td>
      <td>{contact.dob}</td>
      <td>{contact.country}</td>
      <td>{contact.state}</td>
      <td>{contact.city}</td>

      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        

        <button type="button" onClick={() => window.confirm("Are you sure you wish to delete this item?") && handleDeleteClick(contact.id)}>
          
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
