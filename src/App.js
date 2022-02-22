import  "./styles/styles.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Tickets from "./components/Tickets/Tickets";
import Biography from "./components/Biography-page/Biography";
import Show from "./components/show-page/show";
import { BrowserRouter as Router, Routes ,Route,} from "react-router-dom";
import data from "./components/Data/data";

function App() {
  const { products } = data;
  console.log(products)
  return (
    <div className="App">
   
    <Router>
       <Header />
    <Routes>
      <Route  path="/Biography" exact element={<Biography/>}/>
      <Route path="/Show" exact element={<Show/>}/>
    </Routes>
       <Footer/>
    </Router>  
     {/* <Route path="/Show"exact  element={3r21products.map((product)=>(
      <Tickets product={product}
       key={product.id}
      />))}/> */}

    </div>
  );
}

export default App;
