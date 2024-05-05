import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { TiPencil } from "react-icons/ti";
import { useState, useEffect } from 'react'; 
import axios  from 'axios';


const Welcome = () => {
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
    <div>
      <h1 className='title'>
        Dashboard
      </h1>
      <h2 class="subtitle">
        Data Barang
      </h2>
      <Link className='button is-primary my-2'>
        Add New
      </Link>      
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name Barang</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Keterangan</th>
            <th>image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {datas.map((data, index) => (
          <tr key={index}>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.harga}</td>
            <td>{data.stok}</td>
            <td>{data.keterangan}</td>
            <td>
              <img src={data.image} alt={data.name} width={50} height={50} />
            </td>
            <td>
              <div class="buttons">
              <button className="button is-warning"> 
                <TiPencil />
              </button>
              <button onClick={() => {
                if (window.confirm("Apakah anda yakin ingin menghapus data ini ?")) {
                  
                }
              }} className="button is-danger" >
                <FaTrash />
              </button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </Table>
      
    </div>
  )
}

export default Welcome
