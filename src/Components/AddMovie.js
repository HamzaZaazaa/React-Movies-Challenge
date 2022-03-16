import React, { useState } from 'react'
import { Modal, Button, FormControl } from 'react-bootstrap'


export default function AddMovie({ show, setIsShow, saveMovie }) {

  const [title, setTitle] = useState('')
  const [rate, setRate] = useState(1)
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const handleRate = (e) => {
    if (e.target.value > 5) {
      setRate(5)
    } else {
      setRate(e.target.value)

    }
  }
  const handleSave = () => {
    setIsShow(false)
    saveMovie((movies) => [...movies, { title, rate, description, image }])
  }
  return (
    <Modal show={show} onHide={setIsShow}>

      <Modal.Dialog >
        <Modal.Header closeButton>
          <Modal.Title>Add A Movie</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <FormControl
            type="text"
            placeholder="Enter Title"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setTitle(e.target.value)}
          />

          <FormControl
            type="text"
            placeholder="Enter Image Link"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setImage(e.target.value)}
          />

          <FormControl

            as="textarea"
            placeholder="Enrer a description"
            className="me-2"
            aria-label="Search"
            onChange={(e) => setDescription(e.target.value)}
          />

          <FormControl
            type="number"
            placeholder="Rate"
            className="me-2"
            aria-label="Search"
            value={rate}
            max={5}
            onChange={(e) => handleRate(e)}
          />


        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setIsShow(false)} variant="secondary">Close</Button>
          <Button variant="primary" onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  )
}
