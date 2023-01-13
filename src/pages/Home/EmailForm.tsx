import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { Button } from 'components/Button'
import { Card, CARD_TYPE } from 'components/Card'
import { DownDownCard } from 'components/DropDownCard'
import { InputCard } from 'components/InputCard'
import { SubmitCard } from 'components/SubmitCard'
import { useAuthContext } from 'modules/auth/AuthContext'

import { openPreFilledEmail } from './openPreFilledEmail'

export const EmailForm = ({ artistOptions }: { artistOptions?: ArtistInfo[] }) => {
  const { loginWithGoogle } = useAuthContext()
  const [fiealdEdition, setFiealdEdition] = useState('')
  const [fiealdEditionDate, setFiealdEditionDate] = useState('')
  const [artistName, setArtistName] = useState('')
  const [artistEmail, setArtistEmail] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const { isLoggedIn } = useAuthContext()

  const openWrittenEmail = useCallback(() => {
    openPreFilledEmail(fiealdEdition, fiealdEditionDate, artistName, artistEmail, downloadLink)
  }, [artistEmail, fiealdEditionDate, artistName, downloadLink, fiealdEdition])

  const onArtistPreFill = useCallback(
    (option: ArtistInfo) => {
      setFiealdEdition(option.edition)
      setFiealdEditionDate(option.editionDate)
      setArtistName(option.name)
      setArtistEmail(option.email)
    },
    [setFiealdEdition, setArtistName, setArtistEmail]
  )

  return (
    <>
      {artistOptions && isLoggedIn ? (
        <DownDownCard values={artistOptions} setValue={onArtistPreFill} />
      ) : (
        <LoginButtonContainer cardType={CARD_TYPE.TOP}>
          <Button onClick={loginWithGoogle}>Se connecter</Button>
        </LoginButtonContainer>
      )}
      <div>
        <StyledInputCard title="Nom de l'artiste : " value={artistName} setValue={setArtistName} />
        <StyledInputCard
          title="E-mail de l'artiste : "
          value={artistEmail}
          setValue={setArtistEmail}
        />
        <StyledInputCard
          title="Lien de téléchargement : "
          value={downloadLink}
          setValue={setDownloadLink}
        />
      </div>
      <SubmitCard buttonLabel="Ouvrir le mail" onSubmit={openWrittenEmail} />
    </>
  )
}

const LoginButtonContainer = styled(Card)({
  justifyContent: 'center',
})

const StyledInputCard = styled(InputCard)(({ theme }) => ({
  marginTop: theme.margin.x2,
  marginBottom: theme.margin.x2,
}))
