import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import axios from 'axios';

const Product = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost/P1/frontend/data.php');
        setDatas(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="row">
    {datas.map((data, index) => (
      <div className="col-md-3" key={index}>
        <Card body color="secondary" className="mx-5" outline style={{ width: '19rem', padding: '10px', height: '95%' }}>
          <img alt="Sample" src="https://picsum.photos/300/200" className="img-fluid" />
          <CardBody>
            <CardTitle className='text-dark' tag="h5"><b>{data.name}</b></CardTitle>
            <CardSubtitle className="mb-2 text-dark" tag="h6">
              harga: {data.harga} <br/> <small className='text-danger'>stok: {data.stok}</small>
            </CardSubtitle>
            <CardText><small>{data.keterangan}</small></CardText>
            <Button outline color='primary' className='mt-5' to={`/data/${data.id}`}>
              View Details
            </Button>
          </CardBody>
        </Card>
      </div>
    ))}
  </div>
  );
};

export default Product;