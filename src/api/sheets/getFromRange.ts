import axios from 'axios'
import credentials from './credentials.json'

const spreadsheetId = credentials.spreadsheet_id
const api_key = credentials.api_key

enum Dimension {
  ROWS = 'ROWS',
  COLUMNS = 'COLUMNS',
}

interface GetFromRangeResponse {
  range: string
  majorDimension: Dimension
  values: string[][]
}

export const getFromRange = async (range: string) => {
  const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?majorDimension=ROWS&key=${api_key}`
  try {
    const res = await axios.get<GetFromRangeResponse>(URL)
    return res.data.values
  } catch (err) {
    console.error(err)
  }
}
