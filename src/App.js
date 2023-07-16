import './Components/style.css';
import './Components/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Homepage/navbar';
import Footer from './Components/Homepage/footer';
import Approute from './Components/Approute';



function App() {
  return (
    <div>

        <Navbar/>
        <Approute/>
        <Footer/>


    </div>
  );
}

export default App;

