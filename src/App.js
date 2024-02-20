import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Documentos from './pages/Documentos';
import Inciden from './pages/Inciden';

function App() {
  return (
    <div className="App">
       <Router> 
        <Navbar />
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />} />
              <Route path="/Incidencias" element={<Inciden />} />
              <Route path="/request" element={<Experience />} />
              <Route path="/documentos" element={<Documentos />} />
           </Routes>
         <Footer />
       </Router>
    </div>
  );
}

export default App;



