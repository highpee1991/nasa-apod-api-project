import React from "react";

const DateInput = props => (
    <form className="apod-form" onSubmit={props.changeDate}>
      <label>Enter a date (YYYY-MM-DD):</label>
      <input className="apod-form-input" />
      <input className="apod-submit" type="submit" />
    </form>
  );

export default DateInput;
