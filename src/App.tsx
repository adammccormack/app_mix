import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToDoListPage } from "./pages/todolist/ToDoListPage";
import { HomePage } from "./pages/homepage/HomePage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <BrowserRouter>
          <nav className="navBar">
            <Link className="navBarLink" to="/">
              Home
            </Link>
            <Link className="navBarLink" to="to-do-list">
              To Do List
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="to-do-list" element={<ToDoListPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
