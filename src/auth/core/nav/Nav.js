import React, { useContext ,useState,useEffect} from 'react';
import style from './nav.css'
import {AuthContext} from '../../../AuthContext';
import { Link } from "react-router-dom";
import ApiInvoker from "../../../auth/config/ApiInvoker"
const Nav =()=>{
    const {user}=useContext(AuthContext);
      const [usuario,setUsuario]=useState({
        usuario:"",
        mensaje:""
      });
     useEffect(()=>{
      const login={'user':"login"}
     ApiInvoker.invokeGET("/login",login,response =>{
      setUsuario({
        usuario:response.usuario,
        mensaje:response.mensaje
      });
    }, error =>{
      console.error("Login Failure",error);
    }
    
    );
    
     },[]);

    return(
        <nav className="navbar"> 
        <span><img src='https://www.shutterstock.com/image-vector/blue-oak-tree-stylized-electronic-260nw-322959890.jpg'></img> </span>
        <span>Bienvienido:{usuario.mensaje}</span>
        <span><a href='#'>Logout</a></span>
        </nav>
    )
}
export default Nav;