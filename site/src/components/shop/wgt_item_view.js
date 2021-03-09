import React, { Fragment } from 'react';


class ItemViewWidget extends React.Component {
    constructor(props) {
      super(props);
      const {item} = props
      this.state = {name: item.name};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ItemViewWidget;