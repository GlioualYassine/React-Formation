import './App.css';
import Product from './components/products';
import Nav from './components/nav';
import Contacts from './components/Contacts';
import About from './components/About';
import ArticleList from './components/articles/ArticleListe';
import Showproduct from './components/Showproduct';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { ProductProvider } from './context/ProductContext';
import ArticleProvider from './context/Article/ArticleProvider';
function App() {
  return (
    <div className="App">
        <>
        <Router>
          <ProductProvider>
          <ArticleProvider>
          <Nav/>
          <Routes>
              <Route path='/' element = {<Product/>}  />
              <Route path='/product/:id' element = {<Showproduct/>}  />
              <Route path='/contacts' element = {<Contacts/>}  />
              <Route path='/about' element= {<About/>} />
              <Route path="/articles" element = {<ArticleList/>} />   
          </Routes>
          </ArticleProvider>
          </ProductProvider>
          

        </Router>
        </>
    </div>
  );
}

export default App;
