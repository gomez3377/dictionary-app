import { ThemeProvider } from "styled-components"
import Definition from "./components/definition/definition.component"
import Header from "./components/header/header.component"
import SearchBar from "./components/search-bar/search-bar.component"

function App() {


  return (
    <div className="App">
   <Header/>
   <SearchBar/>
   <Definition/>
    </div>
  )
}

export default App
