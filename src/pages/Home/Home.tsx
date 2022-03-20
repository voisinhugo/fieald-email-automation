import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArtistInfo, fetchArtistInfo } from '../../api/sheets/fetchArtistInfo'

import { initSheetAPI } from '../../api/sheets/initSheetAPI'
import { loginWithGoogle } from '../../api/sheets/loginWithGoogle'
import { logoutWithGoogle } from '../../api/sheets/logoutWithGoogle'
import { Button } from '../../components/Button'
import { Header, HEADER_HEIGHT } from '../../components/Header'
import { SubmitCard } from '../../components/SubmitCard'

import { EmailForm } from './EmailForm'

export const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null)
  const [artistOptions, setArtistOptions] = useState<ArtistInfo[]>()

  useEffect(() => {
    initSheetAPI(setIsLoggedIn)
  }, [])

  useEffect(() => {
    const fetch = async () => {
      const artistInfo = await fetchArtistInfo()
      setArtistOptions(artistInfo)
    }
    if (isLoggedIn) {
      fetch()
    }
  }, [isLoggedIn])

  return (
    <Container>
      <Header>
        <HeaderTitle>{"Envoi automatisé d'email"}</HeaderTitle>
        {isLoggedIn ? <Button onClick={logoutWithGoogle}>Se déconnecter</Button> : null}
      </Header>
      <BodyContainer>
        {isLoggedIn ? (
          <EmailForm artistOptions={artistOptions} />
        ) : (
          <>
            <div />
            <SubmitCard buttonLabel="Se connecter" onSubmit={loginWithGoogle} />
          </>
        )}
      </BodyContainer>
    </Container>
  )
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  height: '100%',
  backgroundColor: theme.color.secondary,
}))

const HeaderTitle = styled.h1(({ theme }) => ({
  color: theme.color.black,
}))

const BodyContainer = styled.div(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  marginTop: HEADER_HEIGHT,
  marginLeft: '20%',
  marginRight: '20%',
  '@media (max-width: 768px)': {
    marginLeft: theme.margin.x2,
    marginRight: theme.margin.x2,
  },
  justifyContent: 'space-between',
}))
