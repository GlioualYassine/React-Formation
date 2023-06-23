import './App.css';
import Product from './components/product';
import Nav from './components/nav';
function App() {
  return (
    <div className="App">
        <>
        <Nav/>
          <div>
            <Product/>
          </div>
        </>
    </div>
  );
}

export default App;
