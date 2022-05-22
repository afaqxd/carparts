import './css/App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Parts from './Components/Parts';
import Parts2 from './Components/Parts2';
import Events from './Components/Events';
import Services from './Components/Services';
import Footer from './Components/Footer';
import Error from './Components/Error';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() 
  {
    return (
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Header/>} />
          <Route path='/home' element={<Header/>} /> 
          <Route path='/products' element={ <div><Parts/><Parts2/></div>} />
          <Route path='/event' element={<Events/>} />
          <Route path='/services' element={<Services/>} />
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer/>
      </Router>


    );
  }

export default App;
