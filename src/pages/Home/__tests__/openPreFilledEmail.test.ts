import { openEmail } from 'libs/openEmail'
import { openPreFilledEmail } from '../openPreFilledEmail'

jest.mock('libs/openEmail', () => ({ openEmail: jest.fn() }))
const mockOpenEmail = jest.mocked(openEmail)

describe('openPreFilledEmail', () => {
  it('opens email with the right text', () => {
    const fiealdEdition = '1180'
    const artistName = 'Jojo le clown'
    const artistEmail = 'toto@example.com'
    const downloadLink = 'https://www.toto.com'

    openPreFilledEmail(fiealdEdition, artistName, artistEmail, downloadLink)
    expect(mockOpenEmail).toHaveBeenCalledWith(
      'toto@example.com',
      'Ton passage au 1180e Fieald !',
      "Bonjour Jojo le clown,\n\nLa vidéo de ton passage au 1180e Fieald est téléchargeable sur ce lien : https://www.toto.com\n\nElle sera disponible une semaine sur le lien, mais nous te conseillons de la sauvegarder sur un support personnel.\n\nEn te souhaitant une bonne réception,\nL'équipe vidéo\n"
    )
  })
})
