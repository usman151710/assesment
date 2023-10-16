import './App.css';
import { Contact, Footer, Navbar, Team, Work } from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src='banner.jpg' className='banner' />
      <Team />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
