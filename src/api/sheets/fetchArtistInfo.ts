import { groupBy } from '../../utils/groupBy'

import { getFromRange } from './getFromRange'
// import { mockedResponse } from './mockedResponse'

const ROW_LENGTH = 14

export type ArtistInfo = {
  edition: string
  name: string
  email: string
}

const mapSheetDataToArtistInfo = (row: string[]): ArtistInfo => ({
  // the edition element is: XXXXe (DD/MM/YYYY), but we only want: XXXX
  edition: row[0].split('e')[0],
  name: row[2],
  email: row[13],
})

export const fetchArtistInfo = async () => {
  console.log('Call to GoogleSheet to fetch artist info.')
  const table = await getFromRange('Commandes 2021-2022!A2%3AN300')
  // const table = mockedResponse
  if (!table) return

  const cleanedTable = table.filter((row) => {
    const isRowComplete = row.length === ROW_LENGTH
    const hasArtistBoughtAVideo = row[5] !== ''
    return isRowComplete && hasArtistBoughtAVideo
  })

  const artistInfoTable = cleanedTable.map(mapSheetDataToArtistInfo)
  const groupedByEdition = groupBy(artistInfoTable, 'edition')

  const editionsFromLatest = Object.keys(groupedByEdition).sort().reverse()
  const artistInfoFromLatest = editionsFromLatest.reduce(
    (prev, curr) => [...prev, ...groupedByEdition[curr]],
    [] as ArtistInfo[]
  )
  return artistInfoFromLatest
}
