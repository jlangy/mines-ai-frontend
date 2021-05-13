import axios from "axios";
const BASE_API_URL = ''

const mockData = [
  {
    name: 'Super Safe Mine',
    lat: 48.407326,
    long: -123.329773,
    risk: 0.1,
    id: 1
  },
  {
    name: 'less Safe Mine',
    lat: 48.410,
    long: -123.3,
    risk: 0.4,
    id: 2
  },
  {
    name: 'The danger zone',
    lat: 48.40732,
    long: -123.32,
    risk: 0.8,
    id: 3
  },
]

export async function getAllMinesData() {
  try {
    const result = await axios.get(BASE_API_URL + '/mines')
    return result.data;
  } catch (error) {
    return mockData
  }
}