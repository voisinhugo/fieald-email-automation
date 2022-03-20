import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { fetchArtistInfo } from 'api/sheets/fetchArtistInfo'
import { logoutWithGoogle } from 'api/sheets/logoutWithGoogle'
import { Button } from 'components/Button'
import { Header, HEADER_HEIGHT } from 'components/Header'
import { useAuthContext } from 'modules/auth/AuthContext'

import { EmailForm } from './EmailForm'

export const Home = () => {
  const [artistOptions, setArtistOptions] = useState<ArtistInfo[]>()
  const { isLoggedIn } = useAuthContext()

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
        <EmailForm artistOptions={artistOptions} />
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
