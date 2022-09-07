import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useQuery, useMutation } from 'react-query';
import Header from "../components/header";
import DeleteData from "../components/delete-data";
import EmptyBox from "../assets/emptybox.png";
import { API } from '../config/api';


export default function ProductsList() {
  let navigate = useNavigate();
  const title = 'Products List';
  document.title = 'WaysBeans | ' + title;

  const [idDelete, setIdDelete] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let { data: products, refetch } = useQuery('productsCache', async () => {
    const response = await API.get('/products');
    return response.data.data;
  });

  const handleUpdate = (id) => {
    navigate('/update-product/' + id);
  };

  const handleDelete = (id) => {
    setIdDelete(id);
    handleShow();
  };

  const deleteById = useMutation(async (id) => {
    try {
      await API.delete(`/product/${id}`);
      refetch();
    } catch (error) {
      console.log(error);
    }
  });

 
  useEffect(() => {
    if (confirmDelete) {
      handleClose();
      deleteById.mutate(idDelete);
      setConfirmDelete(null);
    }
  }, [confirmDelete]);

  return (
    <>
      <Header/>
      <Container className="py-5">
        <Row>
          <Col xs="6">
            <div className="text-header-category mb-4"
            style={{color:`#613D2B`}}><h2>List Product</h2></div>
          </Col>
          <Col xs="12">
            { products?.length !== 0 ? (
              <Table size="lg">
                <thead>
                  <tr style={ {
                            height: '80px',
                          } }>
                    <th width="1%" className="text-center">
                      No
                    </th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Stock</th>
                    <th>Price (Rp)</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  { products?.map((data, index) => (
                    <tr key={ index }>
                      <td className="align-middle text-center">{ index + 1 }</td>
                      <td className="align-middle">
                        <img
                          src={ data.image }
                          style={ {
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                          } }
                          alt={ data.title }
                        />
                      </td>
                      <td className="align-middle"
                       style={{
                        overflow: 'auto',
                        height: '100px',
                        width:'30px',
                      }}>{ data.title }</td>
                      <td className="align-middle">{ data.stock }</td>
                      <td className="align-middle">{ data.price }</td>
                      <td className="align-middle"
                      style={{
                        overflow: 'auto',
                        height: '100px',
                      }}>{ data.description }</td>
                      <td className="align-middle">
                      <Button
                          onClick={ () => {
                            handleDelete(data.id);
                          } }
                          className="btn-sm btn-danger mr-2"
                          style={ { width: '100px',
                          marginRight: '1rem',
                          marginBottom: '0.5rem'
                         } }
                        >
                          Delete
                        </Button>
                        <Button
                          onClick={ () => {
                            handleUpdate(data.id);
                          } }
                          className="btn-sm btn-success me-2"
                          style={{width: '100px',}}
                        >
                          Update
                        </Button>
                        
                      </td>
                    </tr>
                  )) }
                </tbody>
              </Table>
            ) : (
              <div className="text-center pt-5">
                <img
                  src={EmptyBox}
                  className="img-fluid"
                  style={ { width: '10%' } }
                  alt="empty"
                />
                <div className="mt-3">No product data available</div>
              </div>
            ) }
          </Col>
        </Row>
      </Container>
      <DeleteData
        setConfirmDelete={ setConfirmDelete }
        show={ show }
        handleClose={ handleClose }
      />
    </>
  );
}
