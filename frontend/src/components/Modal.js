 // frontend/src/components/Modal.js

    import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
        constructor(props){
            super(props);
                this.state = {
                    activeItem: this.props.activeItem
                };
        }
        handleChange = e =>{
            let { name, value } = e.target;
            if (e.target.type === "checkbox") {
                value = e.target.checked;
            }
            const activeItem = { ...this.state.activeItem, [name]: value };
            this.setState({ activeItem });
        };

        render() {
            const { toggle, onSave, onSaveFTE } = this.props;
            console.log(this);
            return (
                <Modal isOpen={true}>
                    <ModalHeader>Faculty</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="netid">NetID</Label>
                                <Input
                                    type="text"
                                    name="netid"
                                    value={this.state.activeItem.netid}
                                    onChange={this.handleChange}
                                    placeholder="Enter NetID"
                                 />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={this.state.activeItem.name}
                                    onChange={this.handleChange}
                                    placeholder="Enter Name"
                                 />
                            </FormGroup>
                            <FormGroup>
                                <Label for="appointmentFTE">Name</Label>
                                <Input
                                    type="text"
                                    name="appointmentFTE"
                                    value={this.state.activeItem.appointmentFTE}
                                    onChange={this.handleChange}
                                 />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                      </Button>
                      <Button color="success" onClick={() => onSaveFTE(this.state.activeItem)}>
                      Save FTE
                      </Button>
                    </ModalFooter>
                  </Modal>
            );
        }
    }