import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Characters from "./components/characters/Characters"
import Header from "./components/header/Header"

//import { useFetchResults } from "./hook/useFetchResults";
function App() {

  //const { characters: items } = useFetchResults();
  return (
    <>
      <Header />
      <Characters />
    </>

  )
}

export default App
