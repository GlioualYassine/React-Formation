import './App.css';
import CountriesList from './component/countries/CountriesList';
import Counter from './component/Counter/Counter';
import CounterProvider from './Context/CounterProvider';
function App() {
  return (
    <>
    <CounterProvider>
      <div className='container'>
          {/*<CountriesList />*/}
          <Counter/>
      </div>
    </CounterProvider>    
    </>
  );
}

export default App;
