import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../layout/Navbar';

const ViewProduit = () => {
    const [produit, setProduit] = useState({
        nomProduit: "",
        prixProduit: "",
        dateCreation: "",
    });

    const { id } = useParams();

    useEffect(() => {
        loadProduit();
    }, []);

    const loadProduit = async () => {
        try {
            const result = await axios.get(`http://localhost:8000/produit/${id}`);
            const formattedDate = new Date(result.data.dateCreation).toLocaleDateString(); // Format de la date
            setProduit({
                ...result.data,
                dateCreation: formattedDate
            });
        } catch (error) {
            console.log("error lors de la featching Produits", error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className="text-center m-4"> Detaile Produit</h2>
                        <div className="card">
                            <div className="card-header">
                                Details of Produit id : {produit.idProduit}
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <b>Nom_Produit : </b>
                                        {produit.nomProduit}
                                    </li>
                                    <li className="list-group-item">
                                        <b>prix_Produit : </b>
                                        {produit.prixProduit} DT
                                    </li>
                                    <li className="list-group-item">
                                        <b>Date_Creation : </b>
                                        {produit.dateCreation}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link className="btn btn-primary my-2" to={"/home"}>
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProduit;
