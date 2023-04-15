import {Routes, Route} from "react-router-dom"
import SearchPage from "./pages/SearchPage"
import {BrowserRouter} from 'react-router-dom'
import TablePage from "./pages/TablePage"
import ResultsPage from "./pages/ResultsPage"


function App(){
    return(
    <BrowserRouter basename="/movie-app">
      <Routes>
        <Route path="/" element={<SearchPage/>} />
        <Route path="/table" element={<TablePage/>} />
        <Route path="/results" element={<ResultsPage/>} />
      </Routes>
    </BrowserRouter>
    )
}

export default App;