export const openEmail = (recipient: string, subject: string, body: string) => {
  window.open(`mailto:${recipient}?subject=${subject}&body=${body}`)
}
