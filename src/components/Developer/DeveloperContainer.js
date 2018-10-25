import React, { Component } from 'react';

class DeveloperContainer extends Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value }); // eslint-disable-line react/no-unused-state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 offset-md-3">
            <p>Developer bio under construction</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DeveloperContainer;
