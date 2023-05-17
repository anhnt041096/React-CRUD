import { Container } from "react-bootstrap";
import "./App.scss";
import TableUsers from "./components/TableUsers";
import Header from "./components/header";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>List Users:</span>
          <button 
            className="btn btn-success"
            onClick={() => setIsShowModalAddNew(true)}
          >
            Add new user
          </button>
        </div>
        <TableUsers />
      </Container>

      <ModalAddNew 
        show={isShowModalAddNew}
        handleClose={() => setIsShowModalAddNew(false)} 
      />
    </div>
  );
}

export default App;
