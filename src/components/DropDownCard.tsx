import { FunctionComponent, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import Select, { CSSObjectWithLabel } from 'react-select'

import { ArtistInfo } from '../api/sheets/fetchArtistInfo'
import { Card, CARD_TYPE } from './Card'

type Props = {
  values: ArtistInfo[]
  setValue: (option: ArtistInfo) => void
}

interface OptionType {
  label: string
  value: ArtistInfo
}

export const DownDownCard: FunctionComponent<Props> = ({ values, setValue }) => {
  const options = useMemo(
    () => values.map((value) => ({ label: `${value.name} (${value.edition})`, value })),
    [values]
  )

  const onChange = useCallback(
    (selectedOption: OptionType | null, { action }: { action: string }) => {
      if (!selectedOption) return
      if (action === 'select-option') {
        setValue(selectedOption.value)
      }
    },
    [setValue]
  )

  const dropDownStyles = useMemo(
    () => ({
      control: (provided: CSSObjectWithLabel) => ({ ...provided, width: 300 }),
    }),
    []
  )

  return (
    <Container cardType={CARD_TYPE.TOP}>
      <Title>Pré-remplir :</Title>
      <Select
        options={options}
        placeholder="Choisir un artiste..."
        onChange={onChange}
        styles={dropDownStyles}
      />
    </Container>
  )
}

const Container = styled(Card)({
  alignItems: 'center',
})

const Title = styled.h3(({ theme }) => ({
  marginRight: theme.margin.x2,
}))
