import React from 'react'
import SearchForm from './SearchForm'
import CocktailList from './CocktailList'
import { AppProvider } from './Context'
const Home = () => {
  return (
    <div>
      <AppProvider>
        <SearchForm />
        <CocktailList />
      </AppProvider>
    </div>
  )
}

export default Home 