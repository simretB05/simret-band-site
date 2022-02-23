import "./styles/styles.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Biography from "./components/Biography-page/Biography";
import Show from "./components/show-page/show";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Biography" exact element={<Biography />} />
          <Route path="/Show" exact element={<Show />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
