
import Axios from 'axios';

export function SET_USERS(){
  return {
    type: 'SET_USERS',
    payload: new Promise((resolve, reject) => {
      Axios.get('http://localhost:3000/api/users')
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    })
  }
}

export function CLEAR_USERS(){
  return {
    type: 'CLEAR_USERS',
    payload: []
  }
}
