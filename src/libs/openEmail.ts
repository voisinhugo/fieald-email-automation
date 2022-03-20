export const openEmail = (recipient: string, subject: string, body: string) => {
  window.open(
    `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
  )
}
