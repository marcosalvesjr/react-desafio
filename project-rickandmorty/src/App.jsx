import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Characters from "./components/characters/Characters"
import Search from "./components/search/Search"
import Pagination from "./components/pagination/Pagination"
//import { useFetchResults } from "./hook/useFetchResults";
function App() {

  //const { characters: items } = useFetchResults();
  return (
    <>
      <h1 className="text-center my-4">Rick & Morty <span className="text-success">API</span></h1>

      <Characters />
      
    </>

  )
}

export default App
