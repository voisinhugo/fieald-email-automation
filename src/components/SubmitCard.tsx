import { FunctionComponent } from 'react'
import styled from 'styled-components'

type Props = {
  onSubmit: () => void
}

export const SubmitCard: FunctionComponent<Props> = ({ onSubmit }) => {
  return (
    <Container>
      <Button onClick={onSubmit}>Ouvrir le mail</Button>
    </Container>
  )
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  paddingTop: theme.margin.x2,
  paddingBottom: theme.margin.x2,
  backgroundColor: theme.color.white,
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  justifyContent: 'center',
}))

const Button = styled.button(({ theme }) => ({
  color: theme.color.primary,
  fontWeight: 'bold',
  backgroundColor: theme.color.white,
  borderBottomColor: theme.color.secondary,
  borderRightColor: theme.color.secondary,
  fontSize: 20,
  borderRadius: 8,
  paddingTop: theme.margin.x1,
  paddingBottom: theme.margin.x1,
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  cursor: 'pointer',
  '&:focus': {
    outline: 'none',
  },
}))
