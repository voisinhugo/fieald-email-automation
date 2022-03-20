/* global gapi */
export const loginWithGoogle = () => gapi.auth2.getAuthInstance().signIn()
