import { useEffect, useState } from 'react'
import { initSheetAPI } from '../../api/sheets/initSheetAPI'

export const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)

  useEffect(() => {
    initSheetAPI(setIsLoggedIn)
  }, [])

  return { isLoggedIn }
}
