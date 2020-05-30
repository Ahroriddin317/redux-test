import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux'
import { updateUsername } from '../redux/reducers/repositories'

const InputView = () => {
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.repositories.username)

  const handlInputChange = (e) => {
    dispatch(updateUsername(e.target.value))
  }

  const handlBtnClick = (e) => {
    e.preventDefault()
    history.push(`/${userName}`)
  }
  return (
    <form className="flex items-center justify-center h-screen" onSubmit={handlBtnClick}>
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          id="input-field"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          placeholder="write userName"
          onChange={handlInputChange}
        />
        <button
          id="search-button"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handlBtnClick}
        >
          search
        </button>
      </div>
    </form>
  )
}

export default InputView
