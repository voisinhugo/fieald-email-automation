import { openEmail } from 'libs/openEmail'

export const openPreFilledEmail = (
  fiealdEdition: string,
  fiealdEditionDate: string,
  artistName: string,
  artistEmail: string,
  downloadLink: string
) => {
  const emailSubject = `Ton passage au ${fiealdEdition}e Fieald !`
  const emailBody = `Bonjour ${artistName},\n\nLa vidéo de ton passage au ${fiealdEdition}e Fieald du ${fiealdEditionDate} est téléchargeable sur ce lien : ${downloadLink}\n\nElle y sera disponible une semaine, mais nous te conseillons de la sauvegarder sur un support personnel.\n\nEn te souhaitant une bonne réception,\nL'équipe vidéo\n`

  openEmail(artistEmail, emailSubject, emailBody)
}
