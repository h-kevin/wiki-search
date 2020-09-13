import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://en.wikipedia.org/w/rest.php/v1'
})

export default instance