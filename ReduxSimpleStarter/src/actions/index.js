import axios from 'axios';
const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  console.log("here");
  return function(dispatch) {
    console.log("in here, dispatch", dispatch);
    axios.post(`${ROOT_URL}/signin`, {email, password});
    // Submit email/password to the server

    // If request is good...
    // - Update state to indicate user is authenticated
    // - Save the JWT token
    // - redirect to the route './feature'

    // If request is bad...
    // - Show an error to the user
  }
}
