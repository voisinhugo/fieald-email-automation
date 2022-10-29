import { groupBy } from 'utils/groupBy'

import { getFromRange } from './getFromRange'
// import { mockedResponse } from './mockedResponse'

const ROW_LENGTH = 14

export const mapSheetDataToArtistInfo = (row: string[]): ArtistInfo | undefined => {
  // the edition element is: XXXXe (DD/MM/YYYY)
  const editionRegexMatch = row[0].match(/(\d+)e \((\d+)\/(\d+)\/(\d+)\)/)
  if (!editionRegexMatch) return

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, edition, day, month, year] = editionRegexMatch
  return {
    edition,
    editionDate: `${day.padStart(2, '0')}/${month.padStart(2, '0')}`,
    name: row[2],
    email: row[13],
  }
}

export const fetchArtistInfo = async () => {
  console.log('Call to GoogleSheet to fetch artist info.')
  const table = await getFromRange('Commandes 2022-2023!A2%3AN500')
  // const table = mockedResponse
  if (!table) return

  const cleanedTable = table.filter((row) => {
    const isRowComplete = row.length === ROW_LENGTH
    const hasArtistBoughtAVideo = row[5] !== ''
    return isRowComplete && hasArtistBoughtAVideo
  })

  const artistInfoTable = cleanedTable.map(mapSheetDataToArtistInfo)
  const cleanedArtistInfoTable = artistInfoTable.filter(Boolean) as ArtistInfo[]
  const groupedByEdition = groupBy(cleanedArtistInfoTable, 'edition')

  const editionsFromLatest = Object.keys(groupedByEdition).sort().reverse()
  const artistInfoFromLatest = editionsFromLatest.reduce(
    (prev, curr) => [...prev, ...groupedByEdition[curr]],
    [] as ArtistInfo[]
  )
  return artistInfoFromLatest
}
