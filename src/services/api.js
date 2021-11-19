import axios from 'axios'

let userData = localStorage.getItem('codeburger:userData')

if (userData) {
  userData = JSON.parse(userData)
}

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    authorization: `Bearer ${userData && userData.token}`
  }
})

export default apiCodeBurger
