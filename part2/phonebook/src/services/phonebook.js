import axios from 'axios'

// create base URL
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
  }
  
  const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
  
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }

  const remove = (id) => {
    return axios.delete(`${(baseUrl)}/${id}`)
  }
  
  export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    remove: remove
  }