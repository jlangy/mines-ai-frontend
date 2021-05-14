import axios from "axios";
// const BASE_API_URL = 'https://996fc38d8a73.ngrok.io';
const BASE_API_URL = '';

const mockData = [
  {
    mine_name: 'mine 1',
    permittee_name: 'permittee 1',
    lat: 48.407326,
    long: -123.359773,
    risk: 0.1,
    id: 1
  },
  {
    mine_name: 'mine 2',
    permittee_name: 'permittee 2',
    lat: 48.450,
    long: -123.3,
    risk: 0.4,
    id: 2
  },
  {
    mine_name: 'mine 3',
    permittee_name: 'permittee 2',
    lat: 48.40732,
    long: -123.32,
    risk: 0.8,
    id: 3
  },
]

export async function getAllMinesData() {
  try {
    const result = await axios.get(BASE_API_URL + '/mine_incidents')
    return result.data;
  } catch (error) {
    return mockData
  }
}

export async function getMineDataByDetails(details) {
  try {
    console.log('starting')
    const result = await axios.get(BASE_API_URL + '/mine_incidents', {params: details});
    console.log('api response is', result.data)
    return result.data;
  } catch (error) {
    return "Yes";
  }
}

export async function getMinesDataByPermitter(minesDetails, permitter) {
  try {
    const result = await axios.post(BASE_API_URL + '/mines', {minesDetails});
    return result.data;
  } catch (error) {
    const reqLength = minesDetails.length;
    return new Array(reqLength).fill("Yes");
  }
}