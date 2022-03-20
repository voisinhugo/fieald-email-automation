import styled from 'styled-components'

export enum CARD_TYPE {
  TOP,
  MIDDLE,
  BOTTOM,
}

type Props = { cardType?: CARD_TYPE }

export const Card = styled.div<Props>(({ theme, cardType = CARD_TYPE.MIDDLE }) => ({
  display: 'flex',
  backgroundColor: theme.color.white,
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  paddingTop: theme.margin.x2,
  paddingBottom: theme.margin.x2,
  ...(cardType === CARD_TYPE.BOTTOM || cardType === CARD_TYPE.MIDDLE
    ? { borderTopLeftRadius: 4, borderTopRightRadius: 4 }
    : {}),
  ...(cardType === CARD_TYPE.TOP || cardType === CARD_TYPE.MIDDLE
    ? { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }
    : {}),
}))
