/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { addTask } from 'redux/tasks-slice'

export const TaskForm = () => {
  const [show, setShow] = useState(false)
  const [validated, setValidated] = useState(false)
  const dispatch = useDispatch()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const title = form.elements.title.value
    const description = form.elements.description.value

    if (form.checkValidity() === false) {
      event.stopPropagation()
    }
    setValidated(true)

    if (validated && title !== '') {
      dispatch(addTask(title, description))
      toast.success(`${title} is added`)
      handleClose()
    }
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Add task</Button>
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>New task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control required type="text" autoFocus name="title"/>
                  <Form.Control.Feedback type="invalid">
                    Enter task title
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={2} name='description'/>
                </Form.Group>
                <Stack direction="horizontal" gap={2}>
                  <Button type="submit">Save</Button>
                  <Button type="button" variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </Stack>
            </Form>
          </Modal.Body>
        </Modal>
    </>
  )
}
