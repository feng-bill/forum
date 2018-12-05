1. Actions folder contains different types of action that describes the type of action of a state. what is changed in the application. All Redux state will go through actions to change update the state. State is also immutatable. 
2. It is a js object display in JSON formate

3. Actions are payloads of information that send data from  application to **store**. 
4. Action will be the only source of information for the store. Using store.dispatch().

export const getPosts = () => dispatch => {)
**or**
function getPosts(text) {
  const action = {
    type: GET_POST,
    text
  }
  dispatch(action)
}

Reference:
https://redux.js.org/basics/actions