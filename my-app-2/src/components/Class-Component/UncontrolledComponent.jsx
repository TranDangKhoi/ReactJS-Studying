import React, { Component } from "react";

class UncontrolledComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
    this.inputRef = React.createRef();
    this.fileRef = React.createRef();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);
    console.log(this.state.selectedFile);
  };

  handleFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  render() {
    return (
      <form
        className="flex flex-col gap-y-2 max-w-[500px] mx-auto"
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2 border-gray-200"
          ref={this.inputRef}
        />
        <label htmlFor="avatar">Avatar</label>
        <input
          type="file"
          name="avatar"
          id="avatar"
          ref={this.fileRef}
          onChange={this.handleFileChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default UncontrolledComponent;
