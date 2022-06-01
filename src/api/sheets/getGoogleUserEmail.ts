/* global gapi */

export const getGoogleUserEmail = () =>
  gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getEmail()
