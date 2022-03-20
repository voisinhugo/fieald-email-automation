import { useCallback, useState } from 'react'
import styled from 'styled-components'
import { ArtistInfo } from '../../api/sheets/fetchArtistInfo'
import { loginWithGoogle } from '../../api/sheets/loginWithGoogle'
import { Button } from '../../components/Button'
import { Card, CARD_TYPE } from '../../components/Card'
import { DownDownCard } from '../../components/DropDownCard'
import { InputCard } from '../../components/InputCard'
import { SubmitCard } from '../../components/SubmitCard'

import { openEmail } from './utils'
import { useAuthContext } from '../../modules/auth/AuthContext'

export const EmailForm = ({ artistOptions }: { artistOptions?: ArtistInfo[] }) => {
  const [fiealdEdition, setFiealdEdition] = useState('')
  const [artistName, setArtistName] = useState('')
  const [artistEmail, setArtistEmail] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const { isLoggedIn } = useAuthContext()

  const openWrittenEmail = useCallback(() => {
    const emailSubject = `Ton passage au ${fiealdEdition}e Fieald !`
    const emailBody = `Bonjour ${artistName},\n\nLa vidéo de ton passage au ${fiealdEdition}e Fieald est téléchargeable sur ce lien : ${downloadLink}\n\nElle sera disponible une semaine sur le lien, mais nous te conseillons de la sauvegarder sur un support personnel.\n\nEn te souhaitant une bonne réception,\nL'équipe vidéo\n`
    openEmail(artistEmail, emailSubject, emailBody)
  }, [artistEmail, artistName, downloadLink, fiealdEdition])

  const onArtistPreFill = (option: ArtistInfo) => {
    setFiealdEdition(option.edition)
    setArtistName(option.name)
    setArtistEmail(option.email)
  }

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
        <StyledInputCard
          title="Édition du FIEALD : "
          value={fiealdEdition}
          setValue={setFiealdEdition}
        />
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
