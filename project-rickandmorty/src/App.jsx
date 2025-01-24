import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Characters from "./components/characters/Characters"
import Header from "./components/header/Header"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import { useFetchResults } from "./hook/useFetchResults";
function App() {

  //const { characters: items } = useFetchResults();
  return (
    <>
      <BrowserRouter>

        <Header />
        <Characters />

      </BrowserRouter>

    </>

  )
}

export default App
