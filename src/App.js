import {Routes, Route} from "react-router-dom"
import SearchPage from "./pages/SearchPage"
import TablePage from "./pages/TablePage"
import ResultsPage from "./pages/ResultsPage"


function App(){
    return(
       

      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="/results" element={<ResultsPage/>} />
      </Routes>
    )
}

export default App;