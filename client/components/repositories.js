import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateUsername, setRepositories } from '../redux/reducers/repositories'

import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Repos = () => {
  const username = useSelector((store) => store.repositories.username)
  const repos = useSelector((store) => store.repositories.list)

  const { username: userNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUsername(userNameParams))
    dispatch(setRepositories(userNameParams))
  }, [userNameParams])



  return (
    <div>
      <Head title="Hello" />
      <h1>Hello</h1>
      {username}
      {JSON.stringify(repos)}
    </div>
  )
}

Repos.propTypes = {}

export default Repos
