import styled from 'styled-components'

export const Button = styled.button(({ theme }) => ({
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
