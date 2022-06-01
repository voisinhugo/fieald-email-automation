import { getGoogleUserEmail } from 'api/sheets/getGoogleUserEmail'
import { openEmail } from 'libs/openEmail'

export const openPreFilledEmail = (
  fiealdEdition: string,
  fiealdEditionDate: string,
  artistName: string,
  artistEmail: string,
  downloadLink: string
) => {
  const emailSubject = `Ton passage au ${fiealdEdition}e Fieald !`
  let emailBody = `Bonjour ${artistName},\n\nLa vidéo de ton passage au ${fiealdEdition}e Fieald du ${fiealdEditionDate} est téléchargeable sur ce lien : ${downloadLink}\n\nElle sera disponible une semaine sur le lien, mais nous te conseillons de la sauvegarder sur un support personnel.\n\nEn te souhaitant une bonne réception,\nL'équipe vidéo\n`

  const userEmail = getGoogleUserEmail()
  if (userEmail === 'hpvoisin@gmail.com') {
    emailBody = `Bonjour ${artistName},\n\nLa vidéo de ton passage au ${fiealdEdition}e Fieald du ${fiealdEditionDate} est téléchargeable sur ce lien : ${downloadLink}\n\nElle sera disponible une semaine sur le lien, mais nous te conseillons de la sauvegarder sur un support personnel.\n\nEn te souhaitant une bonne réception,\nHugo de l'équipe vidéo\n`
  }
  openEmail(artistEmail, emailSubject, emailBody)
}
