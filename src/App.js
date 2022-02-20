import  "./styles/styles.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Show from "./components/show/Show";
import Biography from "./components/Biography/Biography";
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
      <Route path="/Show"exact  element={products.map((product)=>(
      <Show product={product}
       key={product.id}
      />))}/>
    </Routes>
       <Footer/>
    </Router>
   
    </div>
  );
}

export default App;
