import axios from 'axios'
import { BASE_URL } from '@/config/constants'

const API = {
   getGames() {
       const endpoint = BASE_URL+'/games'
       return axios.get(endpoint)
   }
}
export default API