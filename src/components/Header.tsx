import styled from 'styled-components'

export const HEADER_HEIGHT = 80

export const Header = () => (
  <Container>
    <Title>{"Envoi automatisé d'email"}</Title>
  </Container>
)

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  position: 'fixed',
  top: 0,
  zIndex: 1,
  height: HEADER_HEIGHT,
  width: '100%',
  paddingLeft: theme.margin.x4,
  backgroundColor: theme.color.white,
  boxShadow: '2px 2px',
  alignItems: 'center',
}))

const Title = styled.h1(({ theme }) => ({
  color: theme.color.black,
}))
