import { mapSheetDataToArtistInfo } from 'api/sheets/fetchArtistInfo'

const sheetData = [
  '1196e (03/02/2022)',
  'Roger That',
  'Roger',
  '*',
  '',
  '',
  '*',
  '',
  '*',
  'Non demandée',
  '',
  '',
  '',
  'roger.that@gmail.com',
]
const expectedArtistInfo: ArtistInfo = {
  edition: '1196',
  editionDate: '03/02',
  name: 'Roger',
  email: 'roger.that@gmail.com',
}

describe('mapSheetDataToArtistInfo', () => {
  it('should return basic artist info correctly', () => {
    expect(mapSheetDataToArtistInfo(sheetData)).toEqual(expectedArtistInfo)
  })

  it('should return undefined if the edition is wrongly filled', () => {
    const brokenDateSheetData = [...sheetData]
    brokenDateSheetData[0] = '1196e(03/02/2022)'

    expect(mapSheetDataToArtistInfo(brokenDateSheetData)).toEqual(undefined)
  })

  it('should display date with leading zeros if missing in the edition date', () => {
    const brokenDateSheetData = [...sheetData]
    brokenDateSheetData[0] = '1196e (3/2/2022)'

    expect(mapSheetDataToArtistInfo(brokenDateSheetData)).toEqual(expectedArtistInfo)
  })
})
