import { FunctionComponent, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import { ArtistInfo } from '../api/sheets/fetchArtistInfo'

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
      control: (provided: any) => ({ ...provided, width: 300 }),
    }),
    []
  )

  return (
    <Container>
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

const Container = styled.div(({ theme }) => ({
  display: 'flex',
  paddingLeft: theme.margin.x4,
  paddingRight: theme.margin.x4,
  paddingTop: theme.margin.x2,
  paddingBottom: theme.margin.x2,
  backgroundColor: theme.color.white,
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  alignItems: 'center',
}))

const Title = styled.h3(({ theme }) => ({
  marginRight: theme.margin.x2,
}))
