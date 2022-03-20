import { FunctionComponent } from 'react'
import styled from 'styled-components'

import { Button } from './Button'
import { Card, CARD_TYPE } from './Card'

type Props = {
  buttonLabel: string
  onSubmit: () => void
}

export const SubmitCard: FunctionComponent<Props> = ({ buttonLabel, onSubmit }) => {
  return (
    <Container cardType={CARD_TYPE.BOTTOM}>
      <Button onClick={onSubmit}>{buttonLabel}</Button>
    </Container>
  )
}

const Container = styled(Card)({
  justifyContent: 'center',
})
