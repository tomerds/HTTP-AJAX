import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const FormInput = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          onChange={props.handleChange}
          type="text"
          name="nameValue"
          id="name"
          placeholder="...Name"
          value={props.nameValue}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          onChange={props.handleChange}
          type="number"
          name="ageValue"
          id="age"
          placeholder="...Age"
          value={props.ageValue}
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          onChange={props.handleChange}
          type="email"
          name="emailValue"
          id="email"
          placeholder="...Email"
          value={props.emailValue}
        />
      </FormGroup>
      <Button color="primary" size="lg" block onClick={props.submitForm}>Submit</Button>
    </Form>
  )
}


export default FormInput;