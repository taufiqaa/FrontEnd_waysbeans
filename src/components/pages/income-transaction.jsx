import Header from "../molecules/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';



export default function IncomeTransaction(){

    return(
        <>
        <Header />
        <section className="table">
        <h1>Income Transaction</h1>
        <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Post Code</th>
          <th>Products Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Taufiq</td>
          <td>Jakarta</td>
          <td>10000</td>
          <td>Guetemal Beans</td>
          <td>Success</td>
        </tr>
      </tbody>
    </Table>
    </section>
</>
    );
}