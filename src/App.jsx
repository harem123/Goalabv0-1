import Landing from './Landing'
import NaviBar from './NaviBar';
import Atom from './Atom';
import AutoTable from './AutoTable';
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (<>
  
  
    <BrowserRouter>
   
    <NaviBar/>
    <div className="container">
<Routes>
  
<Route path="/" element={<Landing/>}></Route>
<Route path="/results" element={<AutoTable/>}></Route>
<Route path="/atom" element={<Atom/>}></Route>

</Routes>
</div>
</BrowserRouter>
  </>);
}
export default App
