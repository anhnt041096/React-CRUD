import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalAddNew = ({ handleClose = () => {}, show }) => {
    
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    
    const handleSaveUser = () => {

    }

    return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="body-add-new">
            <form>
              <div class="mb-3">
                <label class="form-label">Name</label>
                <input
                  type="text"
                  class="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="mb-3">
                <label class="form-label">Job</label>
                <input
                  type="text"
                  class="form-control"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
