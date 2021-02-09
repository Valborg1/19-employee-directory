import React from "react";

function EmployeeData(props) {
    return (
        <tr>
            <td><img src={props.img} alt={props.img}></img></td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.city}</td>
            <td>{props.ssn}</td>
        </tr>
    );
  }
  
  export default EmployeeData;