import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home/Home"
import SearchResults from "../pages/Search_results/SearchResults"

const AllNavigations = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search" element={<SearchResults />}></Route>
            <Route path="*" element={<p>page not found</p>}></Route>
        </Routes>
    )
}

export default AllNavigations