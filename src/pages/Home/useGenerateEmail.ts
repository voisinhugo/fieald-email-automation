import { useCallback, useState } from 'react'
import { openEmail } from './utils'

export const useGenerateEmail = () => {
  const [fiealdEdition, setFiealdEdition] = useState('')
  const [artistFirstName, setArtistFirstName] = useState('')
  const [artistEmail, setArtistEmail] = useState('')
  const [downloadLink, setDownloadLink] = useState('')

  const openWrittenEmail = useCallback(() => {
    const emailSubject = `Ton passage au ${fiealdEdition}e Fieald !`
    const emailBody = `Bonjour ${artistFirstName},%0A%0ALa vidéo de ton passage au ${fiealdEdition}e Fieald est téléchargeable sur ce lien : ${downloadLink}%0A%0AElle sera disponible une semaine sur le lien, mais nous te conseillons de la sauvegarder sur un support personnel.%0A%0AEn te souhaitant une bonne réception,%0AL'équipe vidéo%0A`
    openEmail(artistEmail, emailSubject, emailBody)
  }, [artistEmail, artistFirstName, downloadLink, fiealdEdition])

  return { setFiealdEdition, setArtistFirstName, setArtistEmail, setDownloadLink, openWrittenEmail }
}
