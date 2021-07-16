import Navbar from './components/header/index'
import Home from './components/containers/home/index'
import PaginationFooter from './components/footer/pagination/index'
import './App.css';

const App = () => {
    return (
    <>
      <div className="App">
        <Navbar></Navbar>
        <Home></Home>
{/*         <PaginationFooter></PaginationFooter> */}
      </div> 
    </>
  );
}

export default App;
