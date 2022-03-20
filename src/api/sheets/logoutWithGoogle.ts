/* global gapi */

export const logoutWithGoogle = () => gapi.auth2.getAuthInstance().signOut()
