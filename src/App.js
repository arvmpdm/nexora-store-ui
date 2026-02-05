import React, {useEffect,useState} from "react";
import keycloack from './auth/core/login/login';
import Nav from './auth/core/nav/Nav';
function App() {
 const [authenticated, setAuthenticated] = useState(false);

 useEffect(()=>{
  keycloack.init({
    onLoad:"login-required",pkceMethod:"S256"
  }).then(auth => setAuthenticated(auth)).catch(err => console.error("Error al inniciar",err))

 },[]);

 
  return(
   <Nav />
   
  )
}

export default App;
