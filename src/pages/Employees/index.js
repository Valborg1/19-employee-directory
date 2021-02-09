import React, { Component } from "react";
import "./style.css";

import API from "../../utils/API";

import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import EmployeeData from "../../components/EmployeeData";
import Alert from "../../components/Alert";

class Employee extends Component {
state = {
  employeeData: [],
  filteredEmployeeData: [],
  search: '',
  error: '',
}

  componentDidMount() {
    API.getEmployeeList()
      .then(res => this.setState({ 
        employeeData: res.data.results,
        filteredEmployeeData: res.data.results
      }))
      .catch(err => console.log(err));
  }

  searchEmployee = (filter) => {
    console.log('Search', filter);
    const filteredList = this.state.employeeData.filter((employee) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ filteredEmployeeData: filteredList });
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    this.searchEmployee(this.state.search)
  };
 
  render () {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
        <br/>
          <h1 className="text-center">Search For An Employee</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
        </Container>
        <Container>
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col" >Image</th>
            <th scope="col" value="firstName" onClick={this.doSort}>First Name</th>
            <th scope="col" value="lastName">Last Lame</th>
            <th scope="col" value="email">Email</th>
            <th scope="col" value="phoneNumber">Phone Number</th>
            <th scope="col" value="city">City</th>
            <th scope="col" value="SSN">SSN</th>
            </tr>
        </thead>
        <tbody>
        {this.state.filteredEmployeeData.map(ee => (
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
        ))}
        </tbody>
        </table>
        </Container>
      </div>
    );
  }}

export default Employee;