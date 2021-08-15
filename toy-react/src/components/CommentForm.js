/* eslint-disable react/jsx-pascal-case */
import React, { Component, Fragment } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Row
  } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

export default class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({ isModalOpen: !this.state.isModalOpen });
    }
    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment)
    }
    render() {
        return (
            <Fragment>
                <Button outline onClick={this.toggleModal} className='mt-3'>
                    <span className='fa fa-pencil fa-lg mx-2'></span>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm className='container' onSubmit={this.handleSubmit}>
                            <Row className='form-group'>
                                <Label className='form-label'>Rating</Label>
                                <Control.select
                                    model='.rating'
                                    name='rating'
                                    className='form-control'
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className='form-group'>
                            <Label className='form-label'>Your Name</Label>
                            <Control.text
                                model='.author'
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                                validators={{
                                    required,
                                    minLength: minLength(2),
                                    maxLength: maxLength(15)
                                }}
                            />
                            <Errors 
                                className='text-danger'
                                model='.author'
                                show='touched'
                                messages={{
                                  required: 'Required',
                                  minLength: 'Must be greater than 2 character',
                                  maxLength: 'Must be 15 characters or less'
                                }}
                            />
                            </Row>
                            <Row className='form-group'>
                            <Label className='form-label'>Comment</Label>
                            <Control.textarea
                                model='.comment'
                                name='comment'
                                className='form-control'
                            />
                            </Row>
                            <Button type='submit' value='submit' color='primary' className='mt-2'>
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}
