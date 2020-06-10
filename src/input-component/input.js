import React from 'react';
import {Form} from 'react-bootstrap';
const Forminput = ({text,value,handlechange,...otherProps}) => {
  return (
    <React.Fragment>
    <Form>
  <Form.Group>
    <Form.Label>{text}</Form.Label>
    <Form.Control value={value} onChange={handlechange} {...otherProps} />
  </Form.Group>
  </Form>
  </React.Fragment>
  );
}

export default Forminput;
