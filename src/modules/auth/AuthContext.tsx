import { createContext, memo, useContext, useEffect, useMemo, useState } from 'react'
import { initSheetAPI } from 'api/sheets/initSheetAPI'

interface IAuthContext {
  isLoggedIn: boolean | null
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

const AuthContext = createContext<IAuthContext>({
  isLoggedIn: null,
  setIsLoggedIn: () => undefined,
})

export function useAuthContext(): IAuthContext {
  return useContext(AuthContext)
}

export const AuthWrapper = memo(function AuthWrapper({ children }: { children: JSX.Element }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    initSheetAPI(setIsLoggedIn)
  }, [setIsLoggedIn])

  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn }), [isLoggedIn, setIsLoggedIn])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
})
