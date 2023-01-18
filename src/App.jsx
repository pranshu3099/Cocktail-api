import { useState } from 'react'
import './App.css'
import SharedLayout from './components/SharedLayout'
import Home from './components/Home'
import About from './components/About'
import SingleCocktail from './components/SingleCocktail'
import Cocktails from './components/Cocktails'
import Error from "./components/Error"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cocktails' element={<Cocktails/>}/>
        <Route path='/cocktail/:id' element={<SingleCocktail/>}/>
        <Route path='*'element={<Error/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
