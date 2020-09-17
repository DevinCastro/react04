import React, { useContext } from 'react'
import GifContext from '../../utils/GifContext'

const Form = () => {

  const { search, handleInputChange, handleSearchGiphy } = useContext(GifContext)
  return (
    <form>
      <p>
        <label htmlFor="search">search</label>
        <input type="text" name="search" value={search} onChange={handleInputChange} />
      </p>
      <p>
        <button onClick={handleSearchGiphy}>Search</button>
      </p>
    </form>
  )
}

export default Form