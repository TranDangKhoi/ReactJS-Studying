import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      food: "coconut",
      marriage: false,
    };
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(e.target.type);
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="checkbox"
          name="marriage"
          checked={this.state.marriage}
          onChange={this.handleChange}
        />
        <textarea
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <select
          onChange={this.handleChange}
          value={this.state.food}
          name="food"
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

export default Form;
