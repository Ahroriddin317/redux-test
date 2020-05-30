import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { updateUsername, setRepositories } from '../redux/reducers/repositories'
// import wave from '../assets/images/wave.jpg'

const ListRepositories = () => {
  const userName = useSelector((store) => store.repositories.username)
  const repos = useSelector((store) => store.repositories.list)

  const { userName: userNameParams } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateUsername(userNameParams))
    dispatch(setRepositories(userNameParams))
  }, [userNameParams])

  return (
    <div>
      <div>
        {repos.map((repo) => {
          return (
            <div
              key={repo}
              className="flex justify-center items-center bg-blue-500 text-white text-center text-sm font-bold rounded-lg w-25 m-6"
              role="alert"
            >
              <Link
                className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-4 text-xl"
                to={`/${userName}/${repo}`}
              >
                {repo}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

ListRepositories.propTypes = {}

export default ListRepositories
