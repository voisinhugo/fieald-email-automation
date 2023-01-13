import { createContext, memo, useContext, useEffect, useMemo, useState } from 'react'
import { getOAuthClient } from 'api/OAuth/getOAuthClient'

interface IAuthContext {
  accessToken?: string
  isLoggedIn: boolean | null
  loginWithGoogle?: () => void
  logoutWithGoogle?: () => void
}

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: null,
})

export function useAuthContext(): IAuthContext {
  return useContext(AuthContext)
}

export const AuthWrapper = memo(function AuthWrapper({ children }: { children: JSX.Element }) {
  const [accessToken, setAccessToken] = useState<string>()
  const [client, setClient] = useState<OAuth2Client>()

  useEffect(() => {
    const client = getOAuthClient((tokenResponse) => {
      setAccessToken(tokenResponse.access_token)
    })
    setClient(client)
  }, [])

  const value = useMemo(
    () => ({
      accessToken,
      isLoggedIn: !!accessToken,
      loginWithGoogle: () => {
        client?.requestAccessToken()
      },
      logoutWithGoogle: () => {
        accessToken && google.accounts.oauth2.revoke(accessToken, () => setAccessToken(undefined))
      },
    }),
    [accessToken, client]
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
})
