import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: '---', // TODO, use your issuer
  clientId: 'A3S',
  redirectUri: window.location.origin + '/signin-oidc',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  postLogoutRedirectUri: window.location.origin + '/signout-oidc',
  scope: 'A3SApi openid profile DeviceDbApi LicenseServiceApi GimsSignalR IotDDSApi',
  responseType: 'id_token token',
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.9, // For faster testing
  sessionChecksEnabled: false,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
};

// export const authConfig: AuthConfig = {
//   issuer: 'https://demo.identityserver.io',
//   clientId: 'implicit',
//   redirectUri: window.location.origin + '/index.html',
//   silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
//   scope: 'openid profile email api',
//   silentRefreshTimeout: 5000, // For faster testing
//   timeoutFactor: 0.25, // For faster testing
//   sessionChecksEnabled: true,
//   showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
//   clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040
// };
