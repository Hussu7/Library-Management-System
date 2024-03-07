import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/pages/Home/Home";
import SingleBook from "./pages/singleBook/SingleBook";
import EditBook from "./pages/editBook/EditBook";
import CreateBook from "./pages/createBook/CreateBook"
import Dashboard from "./pages/dashboard/Dashboard";
import UpdateBook from "./pages/updateBook/UpdateBook";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/book/:id" element={<SingleBook/>}></Route>
          <Route path="/dashboard/createbook" element={<CreateBook/>}></Route>
          <Route path="/dashboard/editbook" element={<EditBook/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/updatebook/:id" element={<UpdateBook/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
