import axios from 'axios'

const URl = 'http://localhost:8000'
export const authenticateSignup = async (data) => {
  try {
    return await axios.post(`${URl}/signup`, data)
  } catch (error) {
    console.log("Api error", error.message)
  }
}
export const authenticateLogin = async (data) => {
  try {
    return await axios.post(`${URl}/login`, data)
  } catch (error) {
    console.log("Api login data", error.message)
    return error.response;
  }
}

export const payUsingPaytm = async (data) => {
  try {
    const response = await axios.post(`${URl}/payment`, data)
    return response.data
  } catch (error) {
    console.log("Erroe while calling payment api", error.message)
  }
}