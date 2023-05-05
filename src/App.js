import NavBar from './Components/navBar';
import Robot from './Components/Robot';
import Paypal from './Components/paypal'
import Busniess from './Components/business';
import Statistic from './Components/Statistic';
function App() {
  return (
  <div className=" bg-[#00040F] w-full h-full" >
    < NavBar />
    <Robot></Robot>
    <Busniess></Busniess>
    <Paypal />
    <Statistic></Statistic>
  </div> 

  ) ;
  
}

export default App;
