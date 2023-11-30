import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Documentos from './pages/Documentos';

function App() {
  return (
    <div className="App">
       <Router> 
        <Navbar />
           <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/incidencias" element={<Projects />} />
              <Route path="/incidencias/:id" element={<ProjectDisplay />} />
              <Route path="/request" element={<Experience />} />
              <Route path="/documentos" element={<Documentos />} />
           </Routes>
         <Footer />
       </Router>
    </div>
  );
}

export default App;



