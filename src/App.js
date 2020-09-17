import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './components/Card'
import Form from './components/Form'
import GifContext from './utils/GifContext'

const App = () => {

  const [gifState, setGifState] = useState({
    search: '',
    gif: { }
  })

  gifState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value})
  }

  gifState.handleSearchGiphy = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?q=${gifState.search}&api_key=0E0ghVQdiqggRcoSoPiZAixFKPxb92XR&limit=5`)
      .then(({ data }) => {
        // console.log(data)
        let gif = data.data.[Math.floor(Math.random() * data.data.length)]
        console.log(gif)
        setGifState({ ...gifState, gif })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios.get(`https://api.giphy.com/v1/gifs/search?q=dogs&api_key=0E0ghVQdiqggRcoSoPiZAixFKPxb92XR&limit=5`)
      .then(({ data }) => {
        // console.log(data)
        let gif = data.data.[Math.floor(Math.random() * data.data.length)]
        console.log(gif)
        setGifState({ ...gifState, gif})
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
    <h1>Giphy App</h1>
    <GifContext.Provider value={gifState}>
    <Form />
    {/* turnary */}
    {
      gifState.gif.title ? <Card /> : null
    }
    </GifContext.Provider>

    </>
  )
}

export default App;
