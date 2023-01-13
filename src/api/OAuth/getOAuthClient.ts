import credentials from 'api/sheets/credentials.json'

const { client_id: CLIENT_ID } = credentials
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

export const getOAuthClient = (callback: InitTokenClientCallback) =>
  google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPE,
    callback, // called after the Google sign-in flow, launched by requestAccessToken()
  })
