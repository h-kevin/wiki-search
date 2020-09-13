import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://en.wikipedia.org'
})

export default instance