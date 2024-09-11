import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import '../PageStyle/home.css'

const Home = () => {
    const [users,setUsers] =  useState([]);
    const [produits,setProduits] =  useState([]);
    useEffect(()=>{
        featchUsers();
        featchProduit()
    },[])

    // ___________________________User___________________________
    const featchUsers = async() =>{
        try {
            const usersData = await axios.get("http://127.0.0.1:8000/users");
            setUsers(usersData.data);

        } catch (error) {
            console.log("error lors de la featching Users",error);
        }
    }



    const deleteUser = async (id) =>{
      try {
        const deletedUser = await axios.delete(`http://127.0.0.1:8000/user/${id}`);
        featchUsers();
      } catch (error) {
        console.log("error lors de la deletting User",error);
      }
    }
    // ______________________________________________________







    // ___________________________Produit___________________________

    const featchProduit = async () => {
      try {
          const produitData = await axios.get("http://127.0.0.1:8000/produits");
          const formattedProduits = produitData.data.map(produit => {
              const dateParts = produit.dateCreation.split('T')[0].split('-'); // Séparer la date de l'heure et diviser les parties de la date
              const formattedDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`; // Format de la date : jour/mois/année
              return {
                  ...produit,
                  dateCreation: formattedDate
              };
          });
          setProduits(formattedProduits);
      } catch (error) {
          console.log("error lors de la featching Produits", error);
      }
  }
  




  const deleteProduit = async (id) =>{
    try {
      const deleteProduit = await axios.delete(`http://127.0.0.1:8000/produit/${id}`);
      featchProduit();
    } catch (error) {
      console.log("error lors de la deletting produit",error);
    }
  }











  return (
    <div className='home'>
    <Navbar/>
    {/* <div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Number</th>
      <th scope="col">Name</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

    {users.map((item,index)=>{
        return(
            <tr key={index}>
                <th scope="row"> {index+1} </th>
                <td> {item.name} </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/viewuser/${item.id}`}>
                   <button className='btn btn-info mx-2'>View <i class="bi bi-eye-fill"></i></button>
                  </Link>
                    <Link to={`/edituser/${item.id}`}>
                      <button className="btn btn-outline-success mx-2">Update <i class="bi bi-gear-fill"></i></button>
                    </Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=>deleteUser(item.id)}
                    
                    >Delete <i class="bi bi-trash3-fill"></i></button>
                </td>
                
            </tr>
        )
    })}


    
   
  </tbody>
</table>
      </div>
    </div> */}





<div className='container'>
      <div className='py-4'>
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Numero_Produit</th>
      <th scope="col">Nom_Produit</th>
      <th scope="col">Prix_Produit</th>
      <th scope="col">Date_Creation</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>

    {produits.map((item,index)=>{
        return(
            <tr key={index}>
                <th scope="row"> {index+1} </th>
                <td> {item.nomProduit} </td>
                <td>{item.prixProduit} DT</td>
                <td>{item.dateCreation}</td>
                <td>
                  <Link to={`/viewproduit/${item.idProduit}`}>
                   <button className='btn btn-info mx-2'>View <i class="bi bi-eye-fill"></i></button>
                  </Link>
                    <Link to={`/editproduit/${item.idProduit}`}>
                      <button className="btn btn-outline-success mx-2">Update <i class="bi bi-gear-fill"></i></button>
                    </Link>
                    <button className="btn btn-danger mx-2"
                    onClick={()=>deleteProduit(item.idProduit)}
                    
                    >Delete <i class="bi bi-trash3-fill"></i></button>
                </td>
                
            </tr>
        )
    })}


    
   
  </tbody>
</table>
      </div>
    </div>





    </div>
  )
}

export default Home
