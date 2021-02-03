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
            const { toggle, onSave } = this.props;
            return (
                <Modal isOpen={true} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Faculty</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="netid">Title</Label>
                                <Input
                                    type="text"
                                    name="netid"
                                    value={this.state.activeItem.netid}
                                    onChange={this.handleChange}
                                    placeholder="Enter NetID"
                                 />
                            </FormGroup>
                            <FormGroup>
                                <Label for="name">Title</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    value={this.state.activeItem.name}
                                    onChange={this.handleChange}
                                    placeholder="Enter Name"
                                 />
                            </FormGroup>
                            <FormGroup check>
                              <Label for="active">
                                <Input
                                  type="checkbox"
                                  name="active"
                                  checked={this.state.activeItem.active}
                                  onChange={this.handleChange}
                                />
                                Completed
                              </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                      </Button>
                    </ModalFooter>
                  </Modal>
            );
        }
    }