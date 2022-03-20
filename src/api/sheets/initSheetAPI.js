/* global gapi */
import credentials from './credentials.json'

const { client_id: CLIENT_ID, api_key: API_KEY } = credentials
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets'

export const initSheetAPI = (callback) => {
  gapi.load('client:auth2', initClientFactory(callback))
}

const initClientFactory = (callback) => () => {
  gapi.client
    .init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    })
    .then(() => {
      gapi.auth2.getAuthInstance().isSignedIn.listen(callback)
      callback(gapi.auth2.getAuthInstance().isSignedIn.get())
    })
}
