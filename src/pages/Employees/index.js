import React, { useState, useEffect } from "react";
import "./style.css";

import API from "../../utils/API";

import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
// import EmployeeData from "../../components/EmployeeData";
import Alert from "../../components/Alert";

function Employees() {
  const [employeeData, setEmployeeData] = useState([])

  useEffect(() => {
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.getEmployeeList()
      .then(res => 
        setEmployeeData(res.data)
      )
      .catch(err => console.log(err));
  };

  // eslint-disable-next-line
  const sortArray = header => {
    const headers = {
      firstName: 'firstName',
      lastName: 'lastName',
      email: 'email',
      phone: 'phone',
      city: 'city',
      ssn: 'SSN'
    }
    const sortProperty = header[headers];
    const sorted = employeeData.sort((a, b) => b[sortProperty] - a[sortProperty]);
    console.log(sorted);
    setEmployeeData(sorted);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEmployeeData({...employeeData, [name]: value})
  };
 
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        <br/>
          <h1 className="text-center">Search For An Employee</h1>
          <Alert
            type="danger"
            style={{ opacity: employeeData.error ? 1 : 0, marginBottom: 10 }}
          >
            {employeeData.error}
          </Alert>
          <SearchForm
            // handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            // search={data.search}
          />
        </Container>
        <Container>
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">Image</th>
            <th scope="col" value="firstName">First Name</th>
            <th scope="col" value="lastName">Last Lame</th>
            <th scope="col" value="email">Email</th>
            <th scope="col" value="phoneNumber">Phone Number</th>
            <th scope="col" value="city">City</th>
            <th scope="col" value="SSN">SSN</th>
            </tr>
        </thead>
        <tbody>
        {/* {employeeData.map(ee => (
          <EmployeeData
            id={ee.login.uuid}
            key={ee.login.uuid}
            img={ee.picture.thumbnail}
            firstName={ee.name.first}
            lastName={ee.name.last}
            email={ee.email}
            phone={ee.cell}
            city={ee.location.city}
            ssn={ee.id.value}
          />
        ))} */}
        </tbody>
        </table>
        </Container>
        
        


      </div>
    );
  








};

export default Employees;