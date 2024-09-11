import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import Navbar from "../layout/Navbar.js"
const EditUser = () => {
    const {id} = useParams();

    let navigate = useNavigate();

    const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
    });


    useEffect(()=>{
        getUserById();
    },[]);


    const getUserById = async () =>{
        try {
            const user = await axios.get(`http://127.0.0.1:8000/user/${id}`);
            setUser(user.data);
        } catch (error) {
            console.log('error lors de getting one user !',error)
        }
    }


    
  
    const { name, username, email } = user;
  
    const onInputChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      await axios.put(`http://localhost:8000/user/${id}`, user);
      setUser({
        name: "",
        username: "",
        email: "",
      });
      navigate("/home");
    };



    return (
      <>
      <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              <h2 className="text-center m-4">Update User</h2>
    
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Username" className="form-label">
                    Username
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">
                    E-mail
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail address"
                    name="email"
                    value={email}
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
      );
}

export default EditUser
