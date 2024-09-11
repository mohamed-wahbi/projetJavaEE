import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const EditProduit = () => {

  const [produit, setProduit] = useState({
    nomProduit: "",
    prixProduit: "",
    dateCreation: "",
  });

  useEffect(()=>{
    getProduitById();
},[]);

  const {id} = useParams();
  let navigate = useNavigate();

  const getProduitById = async () =>{
    try {
        const produit = await axios.get(`http://127.0.0.1:8000/produit/${id}`);
        setProduit(produit.data);
    } catch (error) {
        console.log('error lors de getting one produit !',error)
    }
}


const { nomProduit, prixProduit, dateCreation } = produit;

const onInputChange = (e) => {
  setProduit({ ...produit, [e.target.name]: e.target.value });
};

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.put(`http://localhost:8000/produit/${id}`, produit);
  setProduit({
    nomProduit: "",
    prixProduit: "",
    dateCreation: "",
  });
  navigate("/home");
};







  return (
    <>
    <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Modifier Produit</h2>
  
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">
                  Nom_Produit
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  name="nomProduit"
                  value={nomProduit}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Prix_Produit
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  name="prixProduit"
                  value={prixProduit}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              
              <button type="submit" className="btn btn-outline-primary">
                Update
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/home">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
      </>
  )
}

export default EditProduit
