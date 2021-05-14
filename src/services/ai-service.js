import axios from "axios";
const BASE_API_URL = ''

const mockData = [
  {
    mine_name: 'test 1',
    permittee_name: 'permittee 1',
    lat: 48.407326,
    long: -123.359773,
    risk: 0.1,
    id: 1
  },
  {
    mine_name: 'test 2',
    permittee_name: 'permittee 2',
    lat: 48.450,
    long: -123.3,
    risk: 0.4,
    id: 2
  },
  {
    mine_name: 'test 3',
    permittee_name: 'permittee 2',
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

export async function getMineDataByDetails(details) {
  try {
    const result = await axios.post(BASE_API_URL + '/mines', {details});
    return result.data;
  } catch (error) {
    return [mockData.find(mine => mine.mine_name === details.mine_name)]
  }
}

export async function getMinesDataByPermitter(minesDetails, permitter) {
  try {
    const result = await axios.post(BASE_API_URL + '/mines', {minesDetails});
    return result.data;
  } catch (error) {
    return mockData.filter(mine => mine.permittee_name === permitter) || []
  }
}