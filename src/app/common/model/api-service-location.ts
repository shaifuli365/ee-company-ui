import {environment} from '../../../environments/environment';

export const apiServiceLocation = {
  authentication: environment.authentication_service_url + '/api/v1/authentication',
  authorization: environment.authorization_service_url + '/api/v1/authorization',
  registration: environment.registration_service_url + '/api/v1/registration',
  opd: environment.opd_service_url + '/api/v1/opd',
};
