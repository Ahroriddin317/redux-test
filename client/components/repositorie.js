import React, { useEffect } from 'react'
// import ReactMarkdown from 'react-markdown/with-html'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateReadmeMD } from '../redux/reducers/repositories'

const Repositories = () => {
  const { userName, repositoryName } = useParams()
  const readmeMD = useSelector((store) => store.repositories.readmeMD)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateReadmeMD(userName, repositoryName))
  }, [repositoryName])
  return (
    <div>
      <div id="description">
        {atob(readmeMD)}
        {/* <ReactMarkdown source={readmeMD} escapeHtml={false} /> */}
      </div>
    </div>
  )
}

export default Repositories
