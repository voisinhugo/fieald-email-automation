import axios from 'axios'
import credentials from './credentials.json'

const spreadsheetId = credentials.spreadsheet_id

enum Dimension {
  ROWS = 'ROWS',
  COLUMNS = 'COLUMNS',
}

interface GetFromRangeResponse {
  range: string
  majorDimension: Dimension
  values: string[][]
}

export const getFromRange = async (range: string, accessToken: string) => {
  const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?majorDimension=ROWS`
  try {
    const res = await axios.get<GetFromRangeResponse>(URL, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    return res.data.values
  } catch (err) {
    console.error(err)
  }
}
