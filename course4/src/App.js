import './App.css';
import Product from './components/products';
import Nav from './components/nav';
import Contacts from './components/Contacts';
import About from './components/About';
import Showproduct from './components/Showproduct';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <>
        <Router>
          <Nav/>
          <Routes>
              <Route path='/' element = {<Product/>}  />
              <Route path='/product/:id' element = {<Showproduct/>}  />
              <Route path='/contacts' element = {<Contacts/>}  />
              <Route path='/about' element= {<About/>} />
                  
          </Routes>
        </Router>
        </>
    </div>
  );
}

export default App;
