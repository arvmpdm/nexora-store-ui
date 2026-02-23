
import React from "react"; 
//import { AuthProvider } from "./auth/AuthContext"; 
import {AuthProvider} from "./AuthContext";
import Nav from "./auth/core/nav/Nav"; 
function App() { 
  return (
  <AuthProvider>
    <Nav />
  </AuthProvider>
  )
}
/*
import React, {useEffect,useState} from "react";
import Nav from './auth/core/nav/Nav';
var configuracion =require('../src/auth/config/config');
import Keycloak from 'keycloak-js';


function App() {
 const [authenticated, setAuthenticated] = useState(false);
 const [login,setLogin] =useState(null);
 const [user,setUser] =useState(null);

/*
 useEffect(()=>{
  fetch("http://127.0.0.1:8080/nexora-store-api/nexora/login")
  .then(response => response.json())
  .then(data=>{
    console.log(data)
  })

 })
 useEffect(()=>{

  const keycloack = new Keycloak({
  url: configuracion.autentication.api,
  realm: configuracion.autentication.realm,
  clientId: configuracion.autentication.clientId,
});
  keycloack.init({
    onLoad:"login-required",
    pkceMethod:"S256"
  }).then(auth => {
    setLogin(keycloack);
    setAuthenticated(auth);

    console.log(keycloack.token);
  }
    ).catch(err => console.error("Error al inniciar",err))

},[]);

  return(

   <Nav />
   
  
   
  )
}
*/
export default App;
