import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ToDoListPage } from "./pages/ToDoListPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
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
