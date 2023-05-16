import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { fetchAllUser } from "../services/userService";

const TableUsers = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    // cal apis
    getUser();
  }, []);

  const getUser = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setListUsers(res.data);
    }
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableUsers;
