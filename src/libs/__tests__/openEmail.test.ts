import { openEmail } from '../openEmail'

describe('openEmail', () => {
  it('open email with recipient, subject and body', () => {
    const recipient = 'toto@example.com'
    const subject = 'Subject'
    const body = 'Body'
    openEmail(recipient, subject, body)
    expect(window.open).toHaveBeenCalledWith('mailto:toto%40example.com?subject=Subject&body=Body')
  })

  it('open email with multiline body', () => {
    const recipient = 'toto@example.com'
    const subject = 'Subject'
    const body = 'Line1\nline2\nline3'

    openEmail(recipient, subject, body)
    expect(window.open).toHaveBeenCalledWith(
      'mailto:toto%40example.com?subject=Subject&body=Line1%0Aline2%0Aline3'
    )
  })

  it('open email with special characters', () => {
    const recipient = 'toto@example.com'
    const subject = 'Subject'
    const body = ':/?=&'

    openEmail(recipient, subject, body)
    expect(window.open).toHaveBeenCalledWith(
      'mailto:toto%40example.com?subject=Subject&body=%3A%2F%3F%3D%26'
    )
  })
})
