import { FunctionComponent } from 'react'
import styled from 'styled-components'

type Props = {
  title: string
  value: string
  setValue: (value: string) => void
}

export const InputCard: FunctionComponent<Props> = ({ title, value, setValue, ...props }) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Input value={value} onChange={(event) => setValue(event.currentTarget.value)}></Input>
    </Container>
  )
}

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  paddingTop: theme.margin.x2,
  paddingBottom: theme.margin.x2,
  marginTop: theme.margin.x2,
  marginBottom: theme.margin.x2,
  backgroundColor: theme.color.white,
  borderRadius: 4,
  alignItems: 'center',
}))

const Title = styled.h3(({ theme }) => ({
  marginRight: theme.margin.x2,
}))

const Input = styled.input({
  display: 'flex',
  flexGrow: 1,
  height: 30,
})
