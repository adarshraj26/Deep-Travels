import './Components/style.css';
import './Components/assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
// import VehicleDetails from './Components/Vehiclebooking/VehicleDetails';
// import Charges from './Components/Vehiclebooking/charges';
// import Passenger from './Components/Vehiclebooking/Passenger';
import Navbar from './Components/Homepage/navbar';
import Footer from './Components/Homepage/footer';
import TopBanner from './Components/Homepage/Topbanner';
import BottomBanner from './Components/Homepage/banner';
import Wizard from './Components/Homepage/wizard';
import Testimonial from './Components/Homepage/testimonial';
import Carbook from './Components/Car';
// import Searchdestination from './Components/Homepage/Destination';



function App() {
  return (
    <div>
      <Navbar/>
      {/* <TopBanner/>
      <Wizard/> */}
      {/* <Searchdestination/> */}
      {/* <BottomBanner/>
      <Testimonial/> */}
      {/* <VehicleDetails/>
      <Charges/>
      <Passenger/> */}
      <Carbook/>
      <Footer/>
    </div>
  );
}

export default App;

