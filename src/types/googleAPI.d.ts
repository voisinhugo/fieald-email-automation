declare let google: GoogleAPI

type GoogleAPI = { accounts: Accounts }

type Accounts = { oauth2: OAuth2 }

type OAuth2 = {
  initTokenClient: (args: {
    client_id: string
    scope: string
    callback: InitTokenClientCallback
  }) => OAuth2Client
  revoke: (access_token: string, callback: () => void) => void
}

type InitTokenClientCallback = (tokenResponse: { access_token: string }) => void

type OAuth2Client = { requestAccessToken: () => void }
