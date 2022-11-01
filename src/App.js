import "./styles/styles.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SharedLayout from "./components/shearedLayout";
import Show from "./pages/show-page/show";
import Biography from "./pages/Biography-page/Biography";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<SharedLayout />} >
            <Route path="/" exact element={<Biography/>} />
            <Route path="/Show" exact element={<Show />} />
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
