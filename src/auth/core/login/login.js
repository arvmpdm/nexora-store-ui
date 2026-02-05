import Keycloak from 'keycloak-js';
var configuracion =require('../../config/config')

const keycloack = new Keycloak({
  url: configuracion.autentication.api,
  realm: configuracion.autentication.realm,
  clientId: configuracion.autentication.clientId,
});

export default keycloack;
