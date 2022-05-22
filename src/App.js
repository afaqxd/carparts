import './css/App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Parts from './Components/Parts';
import Parts2 from './Components/Parts2';
import About from './Components/Events';
import Services from './Components/Services';
import Footer from './Components/Footer';

function App() 
  {
    return (
      <div className="App">
      {
        <>
        <Navbar/>
        <Header/>
        <Parts/>
        <Parts2/>
        <About/>
        <Services/>
        <Footer/>
        </>
      }

      </div>
    );
  }

export default App;
