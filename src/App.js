import './Components/style.css';
import './Components/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Homepage/navbar';
import Footer from './Components/Homepage/footer';
// import Approute from './Components/Approute';
import Contactform from './Components/Contact';



function App() {
  return (
    <div>

        {/* <Approute> */}
        <Navbar/>
        <Footer/>
        {/* </Approute> */}
        {/* <Contactform/> */}


    </div>
  );
}

export default App;

