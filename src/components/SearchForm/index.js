import React from "react";
import "./style.css";
import Row from "../Row"
import Col from "../Col"

function SearchForm(props) {
  return (

  <Row>
    <Col size="md-4">
    <form className="search"
          onSubmit={e => { e.preventDefault(); }}>
    <div className="form-group">
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="search"
        list="employees"
        type="text"
        className="form-control"
        placeholder="Search Employees"
        id="search"
      />
    </div>
    </form>
    </Col>
    {/* <Col size="md-1">
      <button type="button" onClick={props.handleFormSubmit} className="btn btn-success">
        Search
      </button>
    </Col> */}
  </Row>

  );
}

export default SearchForm;
