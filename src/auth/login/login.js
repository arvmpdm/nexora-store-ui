import Keycloak from 'keycloak-js';

const keycloack = new Keycloak({
  url: 'http://localhost:9080',
  realm: 'sflt',
  clientId: 'sflt-panda-front',
});

export default keycloack;
