declare let gapi: GoogleAPI

type GoogleAPI = { auth2: Auth2; client: Client; load: Load }

type Client = {
  init: (props: ClientInitProps) => Promise<void>
}

type ClientInitProps = {
  apiKey: string
  clientId: string
  scope: string
  discoveryDocs: string[]
}

type LoginCallback = (isLoggedIn: boolean) => void

type Load = (authMethod: string, callback: LoginCallback) => void

type Auth2 = {
  getAuthInstance: () => GetAuthInstanceReturnType
}

type GetAuthInstanceReturnType = {
  isSignedIn: GetAuthInstanceIsSignedIn
  signIn: () => void
  signOut: () => void
}

type GetAuthInstanceIsSignedIn = { listen: (callback: LoginCallback) => void; get: () => boolean }
