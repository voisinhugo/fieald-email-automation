import styled from 'styled-components'

import { Header, HEADER_HEIGHT } from '../../components/Header'
import { InputCard } from '../../components/InputCard'
import { SubmitCard } from '../../components/SubmitCard'
import { useGenerateEmail } from './useGenerateEmail'

export const Home = () => {
  const {
    setFiealdEdition,
    setArtistFirstName,
    setArtistEmail,
    setDownloadLink,
    openWrittenEmail,
  } = useGenerateEmail()

  return (
    <Container>
      <Header />
      <BodyContainer>
        <div>
          <InputCard title="Édition du FIEALD : " setValue={setFiealdEdition} />
          <InputCard title="Prénom de l'artiste : " setValue={setArtistFirstName} />
          <InputCard title="E-mail de l'artiste : " setValue={setArtistEmail} />
          <InputCard title="Lien de téléchargement : " setValue={setDownloadLink} />
        </div>
        <SubmitCard onSubmit={openWrittenEmail} />
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

const BodyContainer = styled.div(({ theme }) => ({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  marginTop: HEADER_HEIGHT + theme.margin.x2,
  marginLeft: '20%',
  marginRight: '20%',
  justifyContent: 'space-between',
}))
