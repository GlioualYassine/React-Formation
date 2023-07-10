import './App.css';
import Product from './components/products';
import Nav from './components/nav';
import Contacts from './components/Contacts';
import About from './components/About';
import ArticleList from './components/articles/ArticleListe';
import Showproduct from './components/Showproduct';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { ProductProvider } from './context/ProductContext';
function App() {
  return (
    <div className="App">
        <>
        <Router>
          <ProductProvider>
          <Nav/>
          <Routes>
              <Route path='/' element = {<Product/>}  />
              <Route path='/product/:id' element = {<Showproduct/>}  />
              <Route path='/contacts' element = {<Contacts/>}  />
              <Route path='/about' element= {<About/>} />
              <Route path="/articles" element = {<ArticleList/>} />   
          </Routes>
          </ProductProvider>
        </Router>
        </>
    </div>
  );
}

export default App;
