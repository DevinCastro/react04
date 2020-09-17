import React, { createContext } from 'react'


const GifContext = createContext({
  search: '',
  gif: { },
  handleInputChange: () => { },
  handleSearchGiphy: () => { }
})

export default GifContext