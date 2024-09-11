import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const AddProduit = () => {
  let navigate = useNavigate();

  const [produit, setProduit] = useState({
    nomProduit: "",
    prixProduit: "",
    dateCreation: "",
  });

  const { nomProduit, prixProduit, dateCreation } = produit;

  const onInputChange = (e) => {
    setProduit({ ...produit, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/produit", produit);
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
          <h2 className="text-center m-4">Crée Un Nouveau Produit</h2>

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
                required
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
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Date_Creation
              </label>
              <input
                type={"date"}
                className="form-control"
                name="dateCreation"
                placeholder='00-00-0000'
                value={dateCreation}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
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

export default AddProduit
