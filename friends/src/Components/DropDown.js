import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';

import FormInput from './Form';

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      ageValue: '',
      emailValue: '',
      nameValue: '',
      id: props.id
    };
  }


  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Update Info</Button>
        <Collapse isOpen={this.state.collapse}>
          <FormInput
            handleChange={this.props.handleChange}
            emailValue={this.props.emailValue}
            ageValue={this.props.ageValue}
            nameValue={this.props.nameValue}
            submitForm={(e) => this.props.updateForm(e, this.state.id)}
          />
        </Collapse>
      </div>
    );
  }
}

export default DropDown;