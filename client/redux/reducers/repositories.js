import axios from 'axios'

const UPDATE_USER_NAME = 'UPDATE_USER_NAME'
const SET_REPOSITORIES = 'SET_REPOSITORIES'
const UPDATE_READMEMD = 'UPDATE_READMEMD'

const initialState = {
  username: '',
  list: [],
  readmeMD: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_NAME:
      return {
        ...state,
        username: action.username
      }
    case SET_REPOSITORIES:
      return {
        ...state,
        list: action.list
      }
    case UPDATE_READMEMD:
      return {
        ...state,
        readmeMD: atob(action.readmeMD)
      }
    default:
      return state
  }
}

export function updateUsername(username) {
  return { type: UPDATE_USER_NAME, username }
}

export function setRepositories(username) {
  return function (dispatch) {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((r) => r.json())
      .then((data) => {
        const list = data.map((repo) => repo.name)
        dispatch({ type: SET_REPOSITORIES, list })
      })
  }
}

export function updateReadmeMD(userName, repositoryName) {
  return function (dispatch) {
    axios(
      `https://api.github.com/repos/${userName}/${repositoryName}/contents/README.md?ref=master`
    ).then((item) => {
      const readmeMD = item.data.content
      dispatch({ type: UPDATE_READMEMD, readmeMD })
    })
  }
}
