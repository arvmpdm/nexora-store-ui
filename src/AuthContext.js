import React, { createContext, useState, useEffect } from "react";
import Keycloak from "keycloak-js";
var configuracion =require('./auth/config/config');// tu archivo de configuración

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const kc = new Keycloak({
      url: configuracion.autentication.api,
      realm: configuracion.autentication.realm,
      clientId: configuracion.autentication.clientId,
    });

    kc.init({ onLoad: "login-required", pkceMethod: "S256" })
      .then(auth => {
        setKeycloak(kc);
        setAuthenticated(auth);

        if (auth) {
          const decoded = JSON.parse(atob(kc.token.split(".")[1]));
          setUser({
            name: decoded.name,
            email: decoded.email,
            roles: decoded.realm_access?.roles || [],
          });
          localStorage.setItem("token", kc.token);
        }
      })
      .catch(err => console.error("Error al iniciar Keycloak", err));
  }, []);

  return (
    <AuthContext.Provider value={{ keycloak, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

