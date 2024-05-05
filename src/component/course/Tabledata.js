import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Layout from '../Layout';

function Tabledata() {
  return (
    <Layout>
      <h2 className='title'>Table</h2>
      <h3 className='subtitle'>List of Data</h3>
      <Link className='button is-primary my-2'>
        Add New
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name Barang</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </Layout>
  );
}

export default Tabledata;