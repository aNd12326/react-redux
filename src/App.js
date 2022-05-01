import { Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Api from "./componentes/pages/Api";
import Home from "./componentes/pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/api' component={Api}/>
    </div>
  );
}

export default App;
