import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    // Alert before unmounting the component
    alert(`A person with an email ${this.props.person.email} is about to be removed`);
  }
 
  render() {
    const { img, email } = this.props.person;
    return (
      <div className="person">
        <b onClick={() => this.props.removePerson(this.props.index)} >X</b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
  
}

export default Person;
