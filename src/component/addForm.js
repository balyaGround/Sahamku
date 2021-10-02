import React from "react";
import { Button, FormControl, FormGroup } from "react-bootstrap";

function addForm() {
  return (
    <div>
      <Form>
        <FormGroup>
          <FormControl type="number" placeholder="Per" required />
        </FormGroup>
        <FormGroup>
          <FormControl type="number" placeholder="Pbv" required />
        </FormGroup>
        <FormGroup>
          <FormControl type="number" placeholder="Roe" required />
        </FormGroup>
        <FormGroup>
          <FormControl type="number" placeholder="Dy" required />
        </FormGroup>
        <Button variant="success" type="submit" block>
          Save
        </Button>
      </Form>
    </div>
  );
}

export default addForm;
