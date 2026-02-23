import React, { useContext } from 'react';
import style from './nav.css'
import {AuthContext} from '../../../AuthContext';

const Nav =()=>{
    const {user}=useContext(AuthContext);

    return(
        <div>
      <h1>Bienvenido {user?.name}</h1>
      <p>Tu email: {user?.email}</p>
    </div>
    )
}
export default Nav;