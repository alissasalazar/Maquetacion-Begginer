import { Icon } from "../IconDesign/Icon";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../ContactMe/contactme.css"

export function Contactme() {
  return (
    <div className="contentContactMe">
      <h1 className="titleContacMe">CONTACT ME</h1>
      <Icon />
      <Form className="formContactMe">
        <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" className="placeHolderForm" />
        </Form.Group>
        <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email Address" className="placeHolderForm" />
        </Form.Group>
        <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Phone Number" className="placeHolderForm" />
        </Form.Group>
        <Form.Group className="mb-3 formInput" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Message" className="placeHolderFormMessage" />
        </Form.Group>
        <div className="contentButtonForm">
        <Button  type="submit" className="buttonForm" >
          Send
        </Button>
        </div>
      </Form>
    </div>
  );
}
